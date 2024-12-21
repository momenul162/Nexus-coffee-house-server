const router = require("express").Router();
const userController = require("../controller/user");
const authenticate = require("../middleware/authenticate");
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/api/current/user", authenticate, userController.getCurrentUser);
router.get("/api/users", authenticate, verifyAdmin, userController.allUser);
router.patch("/admin/api/users/:userId", authenticate, verifyAdmin, userController.updateUser);
router.delete("/admin/api/users/:userId", authenticate, verifyAdmin, userController.deleteUser);

module.exports = router;
