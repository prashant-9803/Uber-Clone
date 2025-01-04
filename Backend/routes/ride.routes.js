const express = require("express");
const router = express.Router();
const { body, query } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/create",
  authMiddleware.authUser,
  body("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup"),
  body("destination").isString().isLength({ min: 3 }).withMessage("Invalid destination"),
  body("vehicleType").isString().isIn(['auto', 'car', 'moto']).withMessage("Invalid vehicleType"),
  rideController.createRide
);

router.get("/get-fare", 
    query("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup"),
    query("destination").isString().isLength({ min: 3 }).withMessage("Invalid destination"),
    authMiddleware.authUser,
    rideController.getFare
)

router.post("/confirm", 
    authMiddleware.authCaptain,
    body("rideId").isMongoId().withMessage("Invalid rideId"),
    rideController.confirmRide
)

router.get("/start-ride", 
    authMiddleware.authCaptain,
    query("rideId").isMongoId().withMessage("Invalid rideId"),
    query("otp").isString().isLength({ min: 6, max:6 }).withMessage("Invalid otp"),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)

module.exports = router;
