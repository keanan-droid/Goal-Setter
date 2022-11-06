const GoalSchema = require('../models/goalModel');

const createGoal = (req, res)=>{

    const Goal = GoalSchema({
        text: req.body.text,
        user: req.User.id
    })

    if(!req.body.text) {
        res.status(500)
        throw new Error("Fill in all fields")
    }

    GoalSchema.create(Goal).then(results=>{
        res.send(results)
    }).catch(err=>{
        res.status(400).send(err)
    })
}

const deleteGoal = (req, res) => { 

    if(!req.params.text) {
        res.status(500)
        throw new Error("Fill in id")
    }

    GoalSchema.findByIdAndDelete(req.params.id).then(results => {
        res.send(results);
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

const updateGoal = (req, res) => {

    if(!req.body.text) {
        res.status(500)
        throw new Error("Fill in all fields")
    }

    const updatedGoal = GoalSchema.findByIdAndUpdate(req.params.id, req.body).then(results => {
        res.send(updatedGoal);
    })
    .catch((err) => {
        res.status(400).send(err)
    })
}

const getGoals = (req, res) => {

    if(!req.params.id) {
        res.status(500)
        throw new Error("Fill in id")
    }

    GoalSchema.find().then(response=>{
        res.send(response)
    }).catch(err=>{
        res.status(400).send(err)
    })
};

const getGoal = (req, res)=>{

    if(!req.params.id) {
        res.status(500)
        throw new Error("Fill in id")
    }

    GoalSchema.findById(req.params.id).then(results=>{
        res.send(results);
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}


module.exports = { createGoal, deleteGoal, updateGoal, getGoals, getGoal }