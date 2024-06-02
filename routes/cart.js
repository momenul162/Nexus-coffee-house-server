const router = require("express").Router();
const cartController = require("../controller/cart");
const authentication = require("../middleware/uthenticate");

router.get("/api/carts/:userId", authentication, cartController.getCart);
router.post("/api/carts", authentication, cartController.postCart);

module.exports = router;
