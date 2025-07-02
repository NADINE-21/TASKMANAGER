
const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs")

//@desc get all users (admin only)
//@route get/api/users/
//@access private (admin)

const getUsers = async (req, res) =>{
    try{
        const users = await User.find({ role:'member'}).select("-password");

        // Add task counts to each user
         const usersWithTaskCounts = await Promise.all(users.map(async (user) =>{
         const pendingTasks  = await Task.countDocuments({ assignedTo: user._id, status:"Pending"});
         const inProgressTasks = await Task.countDocuments({assignTo: user._id, status:"In Progress"});
         const CompletedTasks = await Task.countDocuments({ assignedTo: user._id, status:"Completed"});

         return{
            ...user._doc, //Include all exisiting user data
            pendingTasks,
            inProgressTasks,
            CompletedTasks,
         };
        }));
        res.json(usersWithTaskCounts);

    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

//@desc get users by id 
//@route get/api/users/:id
//@access private 
const getUserById = async (req, res) =>{
    try{
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found"});
        res.json(user);
    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

//@desc delete a user (admin only)
//@route delete /api/users/:id
//@access private (admin)
/*const deleteUser= async (req, res) =>{
    try{

    }catch(error){
        res.status(500).json({ message: "Server error", error: error.message});
    }
};
*/

module.exports = { getUsers, getUserById};