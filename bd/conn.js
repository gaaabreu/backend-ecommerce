const mongoose = require('mongoose');

async function main() {
    try {

        mongoose.set("strictQuery", true)
        // await mongoose.connect("mongodb+srv://gabrieldumont:lmzyF4CEE5aUoISU@cluster0.grfid76.mongodb.net/")
        await mongoose.connect("mongodb+srv://GabrielDumont:ksplUBxtmAjkvrZO@cluster.tlrh8.mongodb.net/")
        console.log("Conectado ao banco!")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;