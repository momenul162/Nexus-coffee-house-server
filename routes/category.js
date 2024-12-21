const router = require("express").Router();
const categoryController = require("../controller/category");
const authentication = require("../middleware/authenticate");
const verifyAdmin = require("../middleware/verifyAdmin");

router.get("/api/categories/:categoryId", authentication, categoryController.getCategoryById);
router.get("/api/categories", categoryController.getAllCategory);
router.post("/api/categories", authentication, verifyAdmin, categoryController.postCategory);

module.exports = router;
