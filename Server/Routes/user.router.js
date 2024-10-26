const express=require("express");
const router=express.Router();
const userController=require("../Controller/user.controller");

router.get("/profile",userController.getUserProfile);

router.get("/",userController.getAllUsers);

router.delete("/profile/:userId",userController.deleteUser);

router.put("/profile/:userId",userController.updateUser)

module.exports=router;