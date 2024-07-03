const paymentController = require("../controller/payment");
const router = require("express").Router();
const authentication = require("../middleware/uthenticate");
const verifyAdmin = require("../middleware/verifyAdmin");

router.post("/payment_intents", authentication, paymentController.paymentIntents);
router.post("/payment-history", authentication, paymentController.paymentHistory);
router.get("/api/admin/orders", authentication, paymentController.getOrders);
router.get("/api/orders/:userId", authentication, paymentController.getOrdersForUser);
router.patch(
  "/api/admin/orders/:orderId",
  authentication,
  verifyAdmin,
  paymentController.updateOrderStatus
);

module.exports = router;
