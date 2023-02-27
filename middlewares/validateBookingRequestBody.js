const theater = require("../models/theater.model");




validateBookingRequestBody = async (req,res,next) =>{

    if(!req.body.theaterId){
        return res.status(400).send({message:"Failed! Theater id is not provided !"});
    }

    const savedTheater= await Theater.findOne({_id:req.body.theaterId});

    if(!savedTheater){
        return res.status(400).send({message:"Failed! Theater id is invalid !"});
    }

    if(!req.body.movieId){
        return res.status(400).send({message:"Failed! Movie id is not provided !"});
    }

    const savedMovie= await Movie.findOne({_id:req.body.movieId});

    if(!savedMovie){
        return res.status(400).send({message:"Failed! movie id is invalid !"});
    }

    if(!savedTheater.movies.includes(req.body.movieId)){
        return res.status(400).send({message:"Failed! movie id is not available in the given theatre!"});
    }


    if(!req.body.timing){
        return res.status(400).send({message:"Failed! Timings is not provided !"});
    }


    if(!req.body.noOfSeats){
        return res.status(400).send({message:"Failed! Seats not provided !"});
    }

    next();
}

module.exports={
    validateBookingRequestBody
}