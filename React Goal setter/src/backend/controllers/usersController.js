const UsersSchema = require('../models/usersModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res)=>{

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    const userExists = await UsersSchema.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)

    const User = UsersSchema.create({
        name,
        email,
        password: hashedPassword
    })

    if (User) {
        res.status(201)
        .json({
             _id: User.id, 
             name: User.name, 
            email: User.email,
            token: generateToken(User._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user information")
    }
}

const signin = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    const User = await UsersSchema.findOne({ email })

    if (User && (await bcrypt.compare(password, User.password))) {
        res.status(201)
        .json({
             _id: User.id, 
             name: User.name, 
            email: User.email,
            token: generateToken(User._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
};

const getUser = async (req, res)=>{
    res.status(200).json(req.user)
}

const generateToken = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    })
}

module.exports = { signup, getUser, signin }