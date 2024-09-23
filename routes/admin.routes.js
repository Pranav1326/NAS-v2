const router = require('express').Router();

const roleController = require('../controllers/role.controller');
const userController = require('../controllers/user.controllers');

// Create new role
router.post('/role/create', roleController.createRole);

// Create a new User
router.post('/create-user', userController.createUser);

// Admin Dashboard details
router.get('/dashboard', userController.dashboardDetails);

// Get Single Users
router.get('/users/:id', userController.getUserDetails);

// Get Single Users
router.get('/roles/:id', userController.getRoleDetails);

// Get all Users
router.get('/usersAll', userController.getAllUsers);

// Get all Roles
router.get('/rolesAll', userController.getAllRoles);

// Login User
router.post('/login', userController.login);

// Change Password of admin
router.post('/change-password', userController.resetAdminPassword);

module.exports = router;