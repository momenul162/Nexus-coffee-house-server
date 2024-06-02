const { paymentController } = require("../controller/payment");
const router = require("express").Router();

router.post("/payment_intents", paymentController);

module.exports = router;
