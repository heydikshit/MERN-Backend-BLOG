const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) { //validation 
            return res.status(400).send({
                success: false,
                message: 'Please fill all fields'
            })
        }
        const existingUser = await userModel.findOne({ email }) //if existing user 
        if (existingUser) {
            return res.status(401).send({
                success: false,
                message: 'user already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10) //10 itna time lagega usko encrypt karne me jitna jyada time utna secure

        const user = new userModel({ username, email, password: hashedPassword })
        await user.save() //save new user 
        return res.status(201).send({
            success: true,
            message: 'new user created',
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: 'Error in register call back',
            success: false,
            error
        })
    }
};
//create new user / register user 


exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            userCount: users.length,
            success: true,
            message: 'all users data',
            users
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'Error in get all users',
            error
        })
    }
};
//get all users 

//LOGIN USER 

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //vallidation
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: 'Please provide email or password'
            })
        }
        const user = await userModel.findOne({ email }) //check whether already a user or not 
        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'email is not registered'
            })
        }
        //password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: 'Invalid username or password'
            })
        }
        return res.status(200).send({
            success: true,
            message: 'login success',
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Error in Login Callback',
            error
        })
    }
};
