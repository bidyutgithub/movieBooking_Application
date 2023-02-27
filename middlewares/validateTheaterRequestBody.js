validateTheaterRequestBody = async (req,res,next)=>{

    //validate name
    if(!req.body.name){
        return res.status(400).send({message:"Failed! Theater name is not provide"});
    }

     //validate the theater description
    if(!req.body.description){
        return res.status(400).send({message: "Failed! Theater description is not provide"});
    }

    //validate The Theater city
    if(!req.body.city){
        return res.status(400).send({message:"Failed! Theater city is not provide"});
    }

    //validate the theater pincoad
    if(!req.body.pinCode){
        return res.status(400).send({message:"Failed Theater pincoad is not provide"});
    }

    next();
}

  module.exports = {
       validateTheaterRequestBody
  };