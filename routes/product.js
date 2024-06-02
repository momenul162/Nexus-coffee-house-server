const router = require("express").Router();
const productCotroller = require("../controller/product");
const authenticate = require("../middleware/uthenticate");

/**
 * -@method GET
 * -Get one product by productId
 */
router.get("/api/products/:productId", productCotroller.getProductById);

/**
 * -@method PATCH
 * -Update a product using put
 */
router.patch("/admin/api/products/:productId", authenticate, productCotroller.updateProductById);

/**
 * -@method DELETE
 * -Create a product
 */
router.delete("/admin/api/products/:productId", authenticate, productCotroller.deleteProductById);

/**
 * -@method POST
 * -Create a new product
 */
router.post("/admin/api/products", authenticate, productCotroller.postProduct);

/**
 * -@method GET
 * -Get all product
 */
router.get("/api/products", productCotroller.getAllproduct);

module.exports = router;
