var db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(function(dbWorkout) {
        res.json(dbWorkout);
        });
    });

    app.post("/api/workouts", function(req, res) {
        db.Workout.create(req.body)
        .then(function(dbWorkout) {
            res.json(dbWorkout);
        });
    });

    app.put("/api/workouts/:id", function(req, res) {
        db.Workout.updateOne({ _id: req.params.id }, { $push: {exercises: req.body }}).then(function(dbWorkout) {
          res.json(dbWorkout);
        });
    });
    // Route to populate stats chart
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
        .then(function(dbWorkout) {
        res.json(dbWorkout);
        });
    });
};