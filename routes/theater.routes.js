const theaterController = require("../controllers/theater.controller")

module.exports = function(app){

    app.post("/mba/api/v1/theaters",theaterController.createTheater);
    app.get("/mba/api/v1/theaters",theaterController.getAllTheater);
    app.get("/mba/api/v1/theaters/:id",theaterController.getTheater);
    app.put("/mba/api/v1/theaters/:id",theaterController.updateTheater);
    app.delete("/mba/api/v1/theaters/:id",theaterController.deleteTheater);
    app.put("mba/api/v1/theaters/:theaterid/movies",theaterController.addMoviesToTheater);
}
