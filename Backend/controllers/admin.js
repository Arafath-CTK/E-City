const Admin = require("../models/admin");
const JWT = require('../middlewares/jwt');

// Admin signup page
const adminAuthCheck = async (req, res) => {
  try {
    if (req.cookies.adminToken) {
      let tokenExtracted = await JWT.verifyUser(req.cookies.adminToken);
      if (tokenExtracted.role === "admin") {
        return res.status(200).json({ isAdmin: true });
      }
    }
    res.status(401).json({ isAdmin: false, message: "Unauthorized access" });
  } catch (error) {
    console.error("Error in adminAuthCheck API:", error);
    res.status(500).json({ isAdmin: false, message: "Internal server error" });
  }
};

module.exports = { adminAuthCheck };
