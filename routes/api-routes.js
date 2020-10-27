var db = require("../models");

module.exports= function(app){
    app.get("/all", function (req, res) {
        db.Workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });
}