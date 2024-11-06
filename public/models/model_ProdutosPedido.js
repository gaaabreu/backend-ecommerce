const mongoose = require("mongoose")
const { Schema } = mongoose

const ProdutosPedido = new Schema({

    id_pedido: { type: String, require: true },
    id_produto: { type: String, ref: "Produtos", require: true }

}, {timestamps: true})

module.exports = mongoose.model("ProdutosPedido", ProdutosPedido)