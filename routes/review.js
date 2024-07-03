const router = require("express").Router();
const reviewController = require("../controller/review");
const authenticate = require("../middleware/uthenticate");

router.get("/api/reviews/:productId", authenticate, reviewController.getReviews);
router.post("/api/reviews", authenticate, reviewController.postReview);

module.exports = router;
