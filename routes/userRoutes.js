const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userController')

//router object 
const router = express.Router()

router.get('/all-users', getAllUsers) //get all users || GET
router.post('/register', registerController) //register user || POST 
router.post('/login', loginController) // Login || POST 

module.exports = router