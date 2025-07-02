
const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {getDashboardData, getUserDashboardData, getTaskById, getTasks, createTask,
    updateTask, updateTaskChecklist, updateTaskStatus, deleteTasks
} = require("../controllers/taskController");

const router = express.Router();

//Task management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);//get all task (admin: all, user:assigned)
router.get("/:id", protect, getTaskById);//get task by id
router.post("/", protect, adminOnly, createTask);//create a task (admin only)
router.put("/:id", protect, updateTask);//update task details
router.delete("/:id", protect, adminOnly, deleteTasks);//Delete a task (admin only)
router.put("/:id/status", protect, updateTaskStatus);//update task status
router.put("/:id/todo", protect, updateTaskChecklist);//update task checklist

module.exports = router;
