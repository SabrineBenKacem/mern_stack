const jokeModel = require('../models/joke.model')


module.exports.findAllJokes = (req,res) => {
    jokeModel.find()
    .then(result => {
        console.log("ALL JOKES FROM DB : ",result,"🎈🎈🎈🎈🎈")
        res.status(200).json(result)
    }
        )
    .catch(error=> res.status(400).json(error))
}

module.exports.findOneJoke = (req,res) => {
    console.log(req.params);
    jokeModel.findById({_id:req.params.id})
    .then(result => {
        console.log("ONE JOKE FROM DB : ",result,"🎈🎈🎈🎈🎈")
        res.status(200).json(result)
    }
        )
    .catch(error=> res.status(400).json(error))
}



module.exports.createJoke = (req,res) => {
    console.log(req.body);
    jokeModel.create(req.body)
    .then(createResult=>{
        console.log(createResult)
        // res = {status:201, json:createResult}
        res.status(201).json(createResult)
    })
    .catch(error=> res.status(400).json(error))

}

module.exports.updateJoke = (req,res) => {
    jokeModel.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}


module.exports.deleteJoke = (req,res) => {
    jokeModel.deleteOne ({_id:req.params.id})
    .then(result=> res.status(200).json(result))
    .catch(error=> res.status(400).json(error))
}