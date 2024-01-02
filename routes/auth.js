const router = require("express").Router();
const { registerControler, loginController } = require("../controller/auth");

router.post("/api/register", registerControler);
router.post("/api/login", loginController);

module.exports = router;
