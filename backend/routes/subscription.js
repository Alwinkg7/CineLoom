const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { upgradeSubscription } = require("../controllers/subscriptionController");

router.post("/upgrade", auth, upgradeSubscription);

module.exports = router;