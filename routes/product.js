const router = require("express").Router();
const productCotroller = require("../controller/product");
const authenticate = require("../middleware/uthenticate");

/**
 * -@method GET
 * -Get one product by productId
 */
router.get("/api/products/:productId", authenticate, productCotroller.getProductById);
/**
 * -@method PATCH
 * -Update a product using patch
 */
router.patch("/api/products/:productId", authenticate);

/**
 * -@method PUT
 * -Update a product using put
 */
router.put("/api/products/:productId", authenticate);

/**
 * -@method DELETE
 * -Create a product
 */
router.delete("/api/products/:productId", authenticate, productCotroller.deleteProductById);

/**
 * -@method POST
 * -Create a new product
 */
router.post("/api/products", authenticate, productCotroller.postProduct);

/**
 * -@method GET
 * -Get all product
 */
router.get("/api/products", authenticate, productCotroller.getAllproduct);

module.exports = router;
