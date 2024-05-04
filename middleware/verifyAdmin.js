const userService = require("../service/user");
const error = require("../utils/error");

const verifyAdmin = async (req, res, next) => {
  const email = req.user.email;

  try {
    const user = await userService.findByProperty("email", email);

    if (!user) {
      throw error("User not found", 404);
    }

    if (user.roles !== "ADMIN") {
      throw error("Forbidden access", 401);
    }

    next();
  } catch (e) {
    next(e);
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyAdmin;
