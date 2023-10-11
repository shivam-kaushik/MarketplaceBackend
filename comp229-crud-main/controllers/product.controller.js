let ProductModel = require('../models/product.model');

module.exports.save = async (req, res) => {
    const product = new ProductModel(req.body);
    let result = await product.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await ProductModel.find(req.params)
    res.json(result)
}

module.exports.update = async (req, res) => {
    let result = await ProductModel.findByIdAndUpdate(req.params._id, req.body, { new: true})
    res.json(result)
}

module.exports.delete = async (req, res) => {
    let result = await ProductModel.findByIdAndDelete(req.params)
    res.json(result)
}

module.exports.deleteAll = async (req, res) => {
    let result = await ProductModel.deleteMany({})
    res.json(result)
}

module.exports.findByString = async (req, res) => {
    let name = req.params.name
    let result = await ProductModel.find({ name: { $regex: name, $options: 'i' } })  
    res.json(result)
}