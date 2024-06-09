const userService = require("../service/user");
const error = require("../utils/error");

const allUser = async (_req, res, next) => {
  /**
   * -TODO filter, sort, pagination, select
   */
  try {
    const users = await userService.getAllUser();

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  const currentUser = req.user;
  try {
    return res.status(200).json(currentUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { roles } = req.body;

  if (!roles) {
    throw error("Please select role", 4000);
  }

  try {
    let user = await userService.findByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 400);
    }
    user.roles = roles ?? user.roles;

    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findByProperty("_id", userId);

    if (!user) {
      throw error("User not found", 400);
    }

    await user.deleteOne({ _id: userId });
    return res.status(203).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  allUser,
  getCurrentUser,
  updateUser,
  deleteUser,
};
