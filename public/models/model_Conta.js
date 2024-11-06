const mongoose = require("mongoose")
const { Schema } = mongoose

const Produtos = new Schema({

    nome:   { type: String, require: true },
    email:  { type: String, require: true },
    senha:  { type: String, require: true },
    isAdm:  { type: Boolean, require: true }

}, {timestamps: true})

module.exports = mongoose.model("Produtos", Produtos)