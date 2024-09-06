const Role = require('../models/Role.model');

// Create new role
exports.createRole = async (req, res, next) => {
    try {
        const { role, permissions } = req.body;
        const newRole = new Role({
            role, permissions
        });
        await newRole.save();
        newRole && res.status(200).json({
            success: true,
            message: 'New role created!'
        });
    } catch (err) {
        console.log(err);
    }
}