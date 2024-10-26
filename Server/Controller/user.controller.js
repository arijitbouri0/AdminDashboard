const userService=require("../Service/user.service");


const getUserProfile=async (req,res)=>{
    try{
        const jwt=req.headers.authorization?.split(" ")[1];
        if(!jwt){
            return res.status(404).send({error:"token not found"});
        }

        const user= await userService.getUserProfileByToken(jwt);

        return res.status(200).send(user);
    } catch(error){
        return res.status(500).send({error:error.message});
    }

}

const getAllUsers=async(req,res)=>{
    try{
        const users=await userService.getAllUsers();
        return res.status(200).send(users);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const deleteUser=async(req,res)=>{
    const userId=req.params.userId;
    try{
        const user=await userService.deleteUser(userId);
        return res.status(201).send(user);
    } catch(error){
        return res.status(500).send({error:error.message});
    }
}

const updateUser = async (req, res) => {
    try {
      const userId = req.params.userId; 
      const { firstname, lastname, email, currentPassword, newPassword } = req.body;
  
      const updatedUser = await userService.updateUser(
        userId, firstname, lastname, email, currentPassword, newPassword
      );
      if (!updatedUser) {
        return res.status(400).json({ message: 'Update failed' });
      }
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };


module.exports={getUserProfile,getAllUsers,deleteUser,updateUser};