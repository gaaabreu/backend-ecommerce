const mongoose = require("mongoose")
const { Schema } = mongoose

const Produtos = new Schema({

    nome:       { type: String, require: true },
    descricao:  { type: String, require: true },
    preco:      { type: String, require: true },
    estoque:    { type: Boolean, require: true },
    imagens:    { type: Array, require: true }

}, {timestamps: true})

module.exports = mongoose.model("Produtos", Produtos)