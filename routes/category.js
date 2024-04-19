const router = require("express").Router();
const categoryController = require("../controller/category");

router.get("/api/categories/:categoryId", categoryController.getCategoryById);
router.get("/api/categories", categoryController.getAllCategory);
router.post("/api/categories", categoryController.postCategory);

module.exports = router;
