const express = require('express')
const app = express()
const router = express.Router()
// const pokemonController = require('../controllers/pokemonController')
// const error = require('../utilities/error')
const pokemonData = require('../data/pokedex')

router.get('/', function (req, res) {
    res.render("index", {})
})

// router.get('/pokemon', (req, res) => {
//     res.render("index", {}) 
//   })

app.get("/pokemon", async (req, res) => {
    // const pokemonObjects = pokemon
    // res.json({pokemonData})
    console.log(pokemonData)
})

app.get("/pokemon/:id", async (req, res) => {
    const id = req.params
    console.log(id)
})

// router.get('/', pokemonController.searchPokemon)
// router.get('/', pokemonController.viewTeam)
// router.post('/:id', pokemonController.addPokemonToTeam)
// router.delete('/:id', pokemonController.deletePokemonFromTeam)

module.exports = router