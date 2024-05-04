const userController = require("../controller/user");
const authenticate = require("../middleware/uthenticate");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = require("express").Router();

router.get("/api/current/user", authenticate, verifyAdmin, userController.getCurrentUser);
router.get("/api/users", userController.allUser);
router.patch("/admin/api/:userId", userController.updateUser);
router.delete("/admin/api/users/:userId", userController.deleteUser);

module.exports = router;
