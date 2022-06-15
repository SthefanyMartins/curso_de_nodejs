const mongoose = require('mongoose');

const product = mongoose.model('product');

module.exports = {
	//pega tudo
	async index(req, res){
		//const products = await product.find();//só executa a próxima linha após a resposta da requisição
		const { page = 1 } = req.query;
		const products = await product.paginate({/*Aqui ficariam os WHERE*/}, { page, limit: 10 });
		return res.json(products);
	},
	//função criar 
	async store(req, res){
		const products = await product.create(req.body);
		return res.json(products);
	},
	//mostra
	async show(req, res){
		const products = await product.findById(req.params.id);
		return res.json(products);
	},
	//altera
	async update(req, res){
		const products = await product.findByIdAndUpdate(req.params.id, req.body, { new:true });
		return res.json(products);
	},
	//delete
	async destroy(req, res){
		await product.findByIdAndRemove(req.params.id);
		return res.send();
	},
};