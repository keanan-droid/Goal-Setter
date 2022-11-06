const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "UsersSchema"
    },
    text:{
        type: String,
        required: [true, 'Please enter the text value']
    }
},{
    timestamps: true,
})

const GoalSchema = mongoose.model("GoalSchema", goalSchema);

module.exports = GoalSchema;