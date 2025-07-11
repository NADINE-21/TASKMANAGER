
export const BASE_URL = "http://localhost:8000";

//utils/apiPath.js
export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", // Register a new user
        LOGIN: "/api/auth/login", //authenticate a user
        GET_PROFILE: "/api/auth/profile", //get user profile
    },

    USERS: {
        GET_ALL_USERS: "/api/users", //get all users
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`,
        CREATE_USER: "/api/users", //create a new user
        UPDATE_USER: (userId) => `/api/users/${userId}`, //update user
        DELETE_USER: (userId) => `/api/users/${userId}`, //delete user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-DATA", //get dashboard data
        GET_USER_DASHBOARD_DATA:"api/tasks/user-dashboard-data",//get user dashboard data
        GET_ALL_TASKS: "/api/tasks", //get all tasks
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, //get task by id
        CREATE_TASK: "/api/tasks", //create a new task
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, //update task
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, //delete task

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, //update task status
        UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, //update todo checklist
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", //export tasks report
        EXPORT_USERS: "/api/reports/export/users", //export users report

    },

    IMAGE:{
        UPLOAP_iMAGE: "/api/auth/upload-image", //upload image
    },
};