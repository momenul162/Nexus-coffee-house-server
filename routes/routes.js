const router = require("express").Router();
const { registerControler, loginController } = require("../controller/auth");
const productController = require("../controller/product");

router.post("/auth/register", registerControler);
router.post("/auth/login", loginController);
router.post("/auth/products", productController);

module.exports = router;
