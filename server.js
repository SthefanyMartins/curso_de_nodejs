//CONFIGURANDO O SERVIDOR NODE (EU ACHO)
// -- IMPORTANDO DEPENDÊNCIAS DO PROJETO
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());//vc pode passar dominios ou codigos de segurança

//Iniciando o db
mongoose.connect('mongodb://localhost:27017/apinode');
//Dá um require em  todas as models
requireDir('./src/models');
//Essa variavel vai dar acesso a model produto
//const Product = mongoose.model('product');

//Primeira rota
/*
app.get('/', (req, res) => {
	Product.create({
		title: 'tenis',
		description: 'numero 38',
		url: 'http://google.com'
	});

	return res.send('hello world');
});
*/
//rotas
app.use('/api', require('./src/routes'));

app.listen(3001); //OUVIR A PORTA 3001 DO NAVEGADOR
