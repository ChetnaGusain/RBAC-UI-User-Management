const express = require('express');
const { getAllUsers, addUser, editUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
