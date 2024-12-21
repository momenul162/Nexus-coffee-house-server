const router = require("express").Router();
const cartController = require("../controller/cart");
const authentication = require("../middleware/authenticate");

router.get("/api/carts/:userId", authentication, cartController.getCart);
router.delete("/api/carts/:cartId", authentication, cartController.removeFromCart);
router.post("/api/carts", authentication, cartController.postCart);

module.exports = router;
