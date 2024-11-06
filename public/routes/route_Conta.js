const router        = require("express").Router()
const mongoose      = require("mongoose")
const Conta = require("../models/model_Conta")

router.post("/conta", async (req, res) => {
    const verifyEmail = await Conta.findOne({ email: req.body.email })
    if (verifyEmail){
        res.json({ msg: "Este e-mail já esta em uso!" })
    } else {
        const response = await Conta.create(req.body)
        res.json(response)
    }
})

router.get("/conta/:email/:senha", async (req, res) => {
    const verifyEmail = await Conta.findOne({ email: req.params.email })
    if (verifyEmail){
        const verifySenha = await Conta.findOne({ senha: req.params.senha })
        if (verifySenha){
            res.json(verifySenha)
        } else {
            res.json({ msg: "Senha incorreta!" })
        }
    } else {
        res.json({ msg: "Este e-mail não está cadastrado!" })
    }
})

module.exports = router