const express = require('express')
const app = express()
const router = express.Router()
const pokemonData = require('../data/pokedex')
const badgeData = require('../data/badges')
const badge = require('../data/badges')

router.get('/', function (req, res) {
    res.render("index", {})
})

app.get("/pokemon", async (req, res) => {
    // const pokemonObjects = pokemon
    // res.json({pokemonData})
    console.log(pokemonData)
})

app.get("/pokemon/:id", async (req, res) => {
    const id = req.params
    console.log(id)
})

app.get("/badge", async (req, res) => {
    console.log(badgeData)
})

app.get("/badge/:id", async (req, res) => {
    const id = req.params
    console.log(id)
})

module.exports = router