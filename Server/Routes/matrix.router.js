const express=require("express");
const router=express.Router();

const revenueController=require("../Controller/revenue.controller");

router.post("/revenue",revenueController.getRevenue);

module.exports=router;