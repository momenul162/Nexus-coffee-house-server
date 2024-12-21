const router = require("express").Router();
const reviewController = require("../controller/review");
const authenticate = require("../middleware/authenticate");

router.get("/api/reviews/:productId", reviewController.getReviews);
router.post("/api/reviews", authenticate, reviewController.postReview);

module.exports = router;
