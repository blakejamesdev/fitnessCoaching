const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    owner:{type: mongoose.Types.ObjectId, ref: "User", required: true},
    bench: {type:String,required: true},
    inclineBench: {type:String,required: true},
    pecdec: {type:String,required: true},
    revpecdec: {type:String,required: true},
    pushdowns: {type:String,required: true},
    latraise: {type:String,required: true},
    declinesitups: {type:String,required: true},
})
// the Outline for ALL Macros we create/populate in dataset

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout 