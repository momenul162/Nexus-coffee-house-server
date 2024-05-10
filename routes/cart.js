const router = require("express").Router();
const cartController = require("../controller/cart");

router.get("/api/carts/:userId", cartController.getCart);
router.post("/api/carts", cartController.postCart);

module.exports = router;
