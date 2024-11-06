const mongoose = require("mongoose")
const { Schema } = mongoose

const Pedidos = new Schema({

    id_conta: { type: String, require: true },
    data_hora: { type: Date, require: true }

}, {timestamps: true})

module.exports = mongoose.model("Pedidos", Pedidos)