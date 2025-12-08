const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');

router.get('/', adminController.listarProdutos);
router.post('/cadastrar', adminController.cadastrarProduto);
router.put('/alterar/:id', adminController.alterarProduto);
router.delete('/deletar/:id', adminController.deletarProduto);

module.exports = router;