
const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetail, createProductReview, getProductReviews, deleteReview,getAdminProducts } = require('../controllers/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("/admin/products/new").post(isAuthenticatedUser,authorizeRoles("admin"),  createProduct);
router.route("/admin/products/:id").put(isAuthenticatedUser,authorizeRoles("admin"),  updateProduct);
router.route("/admin/products/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),  deleteProduct);
router.route("/products/:id").get(getProductDetail);
router.route("/review").put(isAuthenticatedUser,createProductReview)
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
