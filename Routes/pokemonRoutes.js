const express = require('express')
const router = express.Router()
const pokemonController = require('../controllers/pokemonController')
const error = require('../utilities/error')

router.get('/', pokemonController.searchPokemon)
router.get('/', pokemonController.viewTeam)
router.post('/:id', pokemonController.addPokemonToTeam)
router.delete('/:id', pokemonController.deletePokemonFromTeam)

module.exports = router;