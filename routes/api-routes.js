var db = require("../models");
var Workout = db.Workout;

module.exports= function(app){
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(function(dbPost) {
                res.json(dbPost);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.put("/api/workouts/:id",(req, res) => {
        db.Workout.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $push: { exercises: req.body  } },
            )
            .then(workout=>{
                res.json(workout)
            })
            .catch(err => {
                res.json(err);
            });
    });
}   