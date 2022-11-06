const express = require('express');
const router = express.Router()
const { protect } = require('../Middleware/authMiddleware')
const { createGoal, 
    deleteGoal, 
    updateGoal, 
    getGoals, 
    getGoal 
} = require('../controllers/goalsController')

router.post('/create', protect, createGoal)
router.put('/:id', deleteGoal)
router.delete('/:id', updateGoal)
router.get('/', getGoals)
router.get('/:id', getGoal)

module.exports = router