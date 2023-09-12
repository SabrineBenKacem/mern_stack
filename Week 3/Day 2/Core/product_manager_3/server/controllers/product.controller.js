const { response } = require('express');
const Product = require('../models/product.model');

module.exports = {
   
    findAllProduct: (req, res) => {
        Product.find()
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error))
    },

    findOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(404).json(error))
    },
    
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(response => res.status(201).json(response))
            .catch(error => res.status(400).json(error))
            
    },
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json(error))
    },

    deleteProduct:(req, res)=>{
        Product.findByIdAndDelete({_id: req.params.id})
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error))
    }
   
}