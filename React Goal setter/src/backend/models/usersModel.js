const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter the name value']
    },
    email:{
        type: String,
        required: [true, 'Please enter the email value'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please enter the password value']
    }
},{
    timestamps: true,
})

const UsersSchema = mongoose.model("UsersSchema", usersSchema);

module.exports = UsersSchema;