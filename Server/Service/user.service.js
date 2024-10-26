const bcrypt = require("bcrypt");
const User = require("../Models/user.model");
const jwtProvider = require("../jwtProvider");
const notificationService=require("../Service/notification.service")

const createUser = async (userData) => {
    try {
        let { firstname, lastname, email, password ,role} = userData;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error(`user already exist with email: ${email}`);
        }

        password = await bcrypt.hash(password, 10);

        const user = await User.create({ firstname, lastname, email, password ,role});

        await notificationService.createNotification(`New user ${firstname} ${lastname} registered with email: ${email}`, 'user');

        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

const findUserByID = async (userId) => {
    // console.log(userId);
    try {
        const user = await User.findById(userId);
        // console.log('userService',user);
        if (!user) {
            throw new Error(`User not found with id: ${userId}`);
        }
        // console.log("User found:", user);
        return user;
    } catch (error) {
        // console.error("Error in findUserByID:", error.message);
        throw new Error(error.message);
    }
};

const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error(`user not found with email: ${email}`);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);
        const user = (await findUserByID(userId));
        if (!user) {
            throw new Error(`user not found: ${userId}`);
        }
        return user.populate("address");
    } catch (error) {
        throw new Error(error.message);
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    }
    catch (error) {
        throw new Error(error.message);
    }
};

const deleteUser =async(userId)=>{
        await User.findByIdAndDelete(userId);
}


const updateUser = async (userId, firstname, lastname, email, currentPassword, newPassword) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordMatch) {
      throw new Error('Incorrect current password');
    }

    user.firstname = firstname || user.firstname;
    user.lastname = lastname || user.lastname;
    user.email = email || user.email;

    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }
    const updatedUser = await user.save();
    return updatedUser;
  } catch (error) {
    console.error('Error in updating user:', error);
    throw error;
  }
};



module.exports = { createUser, findUserByID, findUserByEmail, getUserProfileByToken, getAllUsers ,deleteUser,updateUser};
