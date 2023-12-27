const router = require("express").Router();
const { registerControler, loginController } = require("../controller/auth");

router.post("/auth/register", registerControler);
router.post("/auth/login", loginController);

module.exports = router;
