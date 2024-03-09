'use strict';

const express = require('express');
const expenseControllers = require('../controllers/expense.controllers');

const router = express.Router();

router.get('/', expenseControllers.getAll);

router.get('/:id', expenseControllers.get);

router.post('/', expenseControllers.create);

router.delete('/:id', expenseControllers.remove);

router.patch('/:id', expenseControllers.update);

module.exports = {
  router,
};
