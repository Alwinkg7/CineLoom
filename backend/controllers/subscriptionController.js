const User = require("../models/User");

exports.upgradeSubscription = async (req, res) => {
  try {
    // Load user from DB using id from req.user
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.subscription = "premium";
    await user.save();

    res.json({ message: "Subscription upgraded to premium!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error upgrading subscription" });
  }
};
