const express = require('express');
const router = express.Router()
const { protect } = require('../Middleware/authMiddleware')
const { signup,   
    signin, 
    getUser } = require('../controllers/usersController')

router.post('/', signup)
router.post('/login', signin)
router.get('/', protect, getUser)

module.exports = router