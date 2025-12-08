const ProdutoModels = require("../models/produtoModels")

class adminController {

    static async listarProdutos(req, res) {// nosso get!!!!!!
        const produtos = await ProdutoModels.findAll()
        res.json(produtos)
    }

    static async cadastrarProduto(req, res) {
        try {
            const { nome, valor } = req.body

            const novoProduto = await ProdutoModels.create({ nome, valor })

            res.json({ message: "produto cadastrado com sucesso", dados: novoProduto })
        } catch (err) {
            res.json({ message: "falha ao cadastrar produto!" })
        }
    }

    static async alterarProduto (req, res) {
        try {

            const id = req.params.id
            const novoProduto = req.body
            const produtoSelecionado = await ProdutoModels.findByPk(id)
            const produtoAlterado = await produtoSelecionado.update(novoProduto)

            res.json({ message: "Música alterada com sucesso", dados: produtoAlterado })

        } catch (err) {
            res.json({ message: "Não foi possível alterar a música" })
        }
    }

    static async deletarProduto(req, res) {
        try{

            const id = req.params.id
            const produtoSelecionado = await ProdutoModels.findByPk(id)
            await produtoSelecionado.destroy()
            res.json({message: "Música deletada com sucesso"})
            
        }catch(err){
            res.json({message: "Não foi possivel deletar a música"})

        }
    }



}

module.exports = adminController