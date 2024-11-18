router.get('/', pokemonController.getPokemon)

router.get('/:id', pokemonController.getPokemonById)

router.post('/', pokemonController.addPokemon)

router.put('/:id', pokemonController.updatePokemon)