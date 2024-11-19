const pokemon = require('../data/pokedex')
const express = require('express');
const app = express();

// app.get('/pokemon', (req, res) => {
//   const { name, id } = req.query;
//   if (name) {
//     const pokemon = pokemonData.find((poke) => poke.name.toLowerCase() === name.toLowerCase());
//     if (pokemon) {
//       res.json(pokemon);
//     } else {
//       res.status(404).json({ error: 'Pokémon not found' });
//     }
//   } else if (id) {
//     const pokemon = pokemonData.find((poke) => poke.id === parseInt(id));
//     if (pokemon) {
//       res.json(pokemon);
//     } else {
//       res.status(404).json({ error: 'Pokémon not found' });
//     }
//   } else {
//     res.json(pokemonData);
//   }
// });

// app.post('/pokemon', (req, res) => {
//     const { name, id } = req.body;
//     const existingPokemon = pokemonData.find((poke) => poke.id === id);
//     if (existingPokemon) {
//       res.status(400).json({ error: 'Pokémon already exists' });
//     } else {
//       const newPokemon = { id, name };
//       pokemonData.push(newPokemon);
//       res.json(newPokemon);
//     }
//   });
  

//   app.patch('/pokemon/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;
//     const pokemon = pokemonData.find((poke) => poke.id === parseInt(id));
//     if (pokemon) {
//       pokemon.name = name;
//       res.json(pokemon);
//     } else {
//       res.status(404).json({ error: 'Pokémon not found' });
//     }
//   });
  
  
//   app.delete('/pokemon/:id', (req, res) => {
//     const { id } = req.params;
//     const index = pokemonData.findIndex((poke) => poke.id === parseInt(id));
//     if (index !== -1) {
//       pokemonData.splice(index, 1);
//       res.json({ message: 'Pokémon removed' });
//     } else {
//       res.status(404).json({ error: 'Pokémon not found' });
//     }
//   });