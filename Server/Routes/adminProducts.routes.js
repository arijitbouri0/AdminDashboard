const express=require("express");
const router=express.Router();

const productController=require("../Controller/product.controller");
const authenticate=require("../Middleware/authenticate");

router.post("/",authenticate,productController.createProduct);
router.post("/creates",productController.createMultipleProducts);
router.delete("/:id",productController.deletProduct);
router.put("/:id",productController.updateProduct);
router.get('/top', productController.getTopProducts);

module.exports=router;