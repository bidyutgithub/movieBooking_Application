const Theater = require("../models/theater.model");

exports.createTheater = async(req,res)=>{
   
    const theaterObject ={
        name:req.body.name,
        city:req.body.city,
        description:req.body.description,
        pinCode:req.body.pinCode
    }
  const theater = await Theater.create(theaterObject);

  res.status(201).send(theater);

}

exports.getAllTheater = async(req,res)=>{
   
    //pincode,name,city,description finding query coad
    const queryObj={};

       if(req.query.pinCode!=undefined){
        queryObj.pinCode=req.query.pinCode;
       }

       if(req.query.name!=undefined){
        queryObj.name=req.query.name;
       }
        
       if(req.query.description!=undefined){
        queryObj.description=req.query.description;
       }

       if(req.query.city!=undefined){
        queryObj.city=req.query.city;
       }

    const theater = await Theater.find({queryObj});
    res.status(200).send(theater);

}

exports.getTheater = async(req,res)=>{
     const id = req.params.id;

     const theater = await Theater.findOne({
        _id:id
     })
     res.status(200).send(theater);
}

exports.deleteTheater = async(req,res)=>{

    await Theater.deleteOne({
        _id:req.params.id
    });
    res.status(200).send({message:`Successfully delete theater with id:${req.params.id}`});
}

exports.updateTheater = async(req,res)=>{
    const id = req.params.id;

    const savedTheater = await Theater.findOne({_id:req.params.id});

    if(!savedTheater){
        return res.status(400).send({message:"Theater dosen't exists"});
    }

    //update the theater deatils
    savedTheater.name = req.body.name ? req.body.name : savedTheater.name;
    savedTheater.description = req.body.description ? req.body.description : savedTheater.description;
    savedTheater.city = req.body.city ? req.body.city : savedTheater.city;
    savedTheater.pinCode = req.body.pinCode ? req.body.pinCode : savedTheater.pinCode;

    const updatedTheater = await savedTheater.save();

    res.status(200).send(updatedTheater);
}

exports.addMoviesToTheater = async(req,res) => {

    const theaterId = req.params.theaterId;
    const movieId =req.params.movieId;

    const savedTheater = await Theater.findOne({_id:theaterId});

    if(!savedTheater){
        return res.status(400).send({message:"Theater dosen't exitsts"});
    }
    const moviesId = req.body.movies;

    if(req.body.insert){
      moviesId.forEach(movieId => {
       savedTheater.movies.push(movieId);
    })
    
    }else if(req.body.delete===true){
       savedMovieIds = savedTheater.movies.filter((MovieId) =>{ 
         return  !movieIds.includes(MovieId.toString());
    })
       
      savedTheater.movies = savedMovieIds;
    }
        const updatedTheater = await savedTheater.save();
        return res.status(200).send(updatedTheater);
   }