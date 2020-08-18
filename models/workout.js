var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    distance: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

var workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercises: [exerciseSchema]
});

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
