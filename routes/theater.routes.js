const theaterController = require("../controllers/theater.controller")
const {verifyToken,isAdmin}= require("../middlewares/authJWT");
const {validateTheaterRequestBody} = require("../middlewares/validateTheaterRequestBody")

module.exports = function(app){

    app.post("/mba/api/v1/theaters",[verifyToken,isAdmin,validateTheaterRequestBody],theaterController.createTheater);
    app.get("/mba/api/v1/theaters",[verifyToken],theaterController.getAllTheater);
    app.get("/mba/api/v1/theaters/:id",[verifyToken],theaterController.getTheater);
    app.put("/mba/api/v1/theaters/:id",[verifyToken,isAdmin],theaterController.updateTheater);
    app.delete("/mba/api/v1/theaters/:id",[verifyToken,isAdmin],theaterController.deleteTheater);
    app.put("mba/api/v1/theaters/:theaterid/movies",[verifyToken,isAdmin],theaterController.addMoviesToTheater);
    app.get("mba/api/v1/theaters/:theaterId/movies/:movieId",[verifyToken],theaterController.checkIfMovieRunningInTheater)
}
