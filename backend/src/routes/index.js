const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../controllers/userController');
const transactionController = require('../controllers/transactionController');

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Transaction routes
router.post('/transactions', transactionController.createTransaction);
router.get('/transactions/:id', transactionController.getTransaction);
router.get('/transactions/user/:userId', transactionController.getUserTransactions);

module.exports = router;