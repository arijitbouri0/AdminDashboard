const express=require("express");
const router=express.Router();

const orderController=require("../Controller/adminOrder.controller");
const authenticate=require("../Middleware/authenticate");

router.get("/",orderController.getAllOrder);

router.put("/:orderId/confirmed",orderController.confirmedOrder);
router.put("/:orderId/ship",orderController.shipOrder);
router.delete("/:orderId/delete",orderController.deleteOrder);
router.put("/:orderId/delivery",orderController.deliveryOrder);

module.exports= router;