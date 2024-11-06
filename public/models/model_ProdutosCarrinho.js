const mongoose = require("mongoose")
const { Schema } = mongoose

const ProdutosCarrinho = new Schema({

    id_conta: { type: String, require: true },
    id_produto: { type: String, ref: "Produtos", require: true }

}, {timestamps: true})

module.exports = mongoose.model("ProdutosCarrinho", ProdutosCarrinho)