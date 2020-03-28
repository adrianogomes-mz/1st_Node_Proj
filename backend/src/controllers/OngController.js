//Importar crypto para criptografia ou criar dados aleatórios
const crypto = require('crypto');

//Import connection
const  connection = require('../database/connection');

module.exports = {
    //listagem
async index (request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
},

//cadastro
    async create(request, response) {
         //Para pegar cada dado numa variável separada
        const {name, email, whatsapp, city, uf} = request.body;

        //4 random nrs hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
         name,
            email,
            whatsapp,
         city,
          uf
        })
        return response.json({ id });

    }
};