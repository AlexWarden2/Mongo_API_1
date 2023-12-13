const Cat = require('../models/catsModel')
const mongoose = require('mongoose')

const getCats = async (req, res) => {
    const cats = await Cat.find({}).sort({createdAt: -1})
    res.status(200).json(cats)
}

const getCat = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such cat!'})
    }

    const cat = await Cat.findById(id)
    if(!cat) {
        return res.status(404).json({error: 'No such cat!'})
    }
    res.status(200).json(cat)
}

const createCat = async (req, res) => {
    const{ name, age, colour } = req.body
    try{
        const cat = await Cat.create({ name, age, colour })
        res.status(200).json(cat)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCat = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such cat!'})
    }

    const cat = await Cat.findOneAndDelete({ _id: id})
    if(!cat) {
        return res.status(404).json({error: 'No such cat!'})
    }
    res.status(200).json(cat)
}

const updateCat = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such cat!'})
    }

    const cat = await Cat.findOneAndUpdate({ _id: id,}, {
        ...req.body
    })
    if(!cat) {
        return res.status(404).json({error: 'No such cat!'})
    }
    res.status(200).json(cat)
}


module.exports = { 
    createCat, 
    getCats, 
    getCat,
    deleteCat,
    updateCat
}
