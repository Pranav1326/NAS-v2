const router = require('express').Router();

const roleController = require('../controllers/role.controller');
const userController = require('../controllers/user.controllers');

// Create new role
router.post('/role/create', roleController.createRole);

// Create a new User
router.post('/create-user', userController.createUser);

// Login User
router.post('/login', userController.login);

module.exports = router;