const userController = require("../controller/user");
const router = require("express").Router();

router.get("/api/users/:userId");
router.get("/api/users", userController.allUser);
router.patch("/admin/api/:userId", userController.updateUser);
router.delete("/admin/api/users/:userId", userController.deleteUser);

module.exports = router;
