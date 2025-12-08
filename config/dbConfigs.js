const sequelize = require('sequelize')
const conexao = new sequelize('defaultdb','avnadmin','AVNS_x1OcaM36aI354ix2SzV',{
    host:'code-project-juliocgdlima-8a90.c.aivencloud.com',
    port: 10379,
    dialect:'mysql',
    dialectOptions: {
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
})


async function testarConexao() {
    try{
        await conexao.authenticate()
        console.log("Sucesso")
    } catch(err){
        console.log("ERRO")
    }
} 

testarConexao()

module.exports = conexao

