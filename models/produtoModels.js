const conexao = require('../config/dbConfigs') // impotando a conexao
const { DataTypes } = require('sequelize') // 

//MODELANDO A TABELA

const Produtos = conexao.define('produtos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // 
    },

    nome: {
        type: DataTypes.STRING,
    },
    imagem: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.FLOAT
    }
})

// 'sync' Execulta o model e monta no banco de dados
Produtos.sync()

module.exports = Produtos 