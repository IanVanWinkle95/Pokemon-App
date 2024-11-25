// I'm not sure why my Post, Patch and Delete isn't working here? It's one we used from the last lab and I edited it to fit my project. 
// Luis was helping me here but we kept running into issues with my routes so we pushed everything to the main app.js.

// I think I figured out my routes. Tested it using thunder client. Used http://localhost:3000/pokemon/39

const express = require('express')
const app = express()
const router = express.Router()
const pokemonData = require('../data/pokedex')
const badgeData = require('../data/badges')
const movesData = require('../data/moves')
const pokemon = require('../data/pokedex')
const badge = require('../data/badges')
const moves = require('../data/moves')

// router.get('/', function (req, res) {
//     res.render("index", {})
// })

router
  .route("/")
  .get((req, res) => {
    res.json(pokemon);
  })
  .post((req, res) => {
    if (req.body.name && req.body.Type && req.body.BaseStats) {
      if (pokemon.find((p) => p.name == req.body.name)) {
        res.json({ error: "Pokemon Already Taken" });
        return;
      }

      const user = {
        id: pokemon[pokemon.length - 1].id + 1,
        name: req.body.name,
        Type: req.body.Type,
        BaseStats: req.body.BaseStats,
      };

      pokemon.push(user);
      res.json(pokemon[pokemon.length - 1]);
    } else res.json({ error: "Insufficient Data" });
  });

  router
  .route("/:id")
  .get((req, res, next) => {
    const pokemonId = pokemon.find((p) => p.id == req.params.id);
    if (pokemonId) res.json(pokemonId);
    else next();
  })
  .patch((req, res, next) => {
    const pokemonId = pokemon.find((p, i) => {
      if (p.id == req.params.id) {
        for (const key in req.body) {
          pokemon[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (pokemonId) res.json(pokemonId);
    else next();
  })
  .delete((req, res, next) => {
    const pokemonId = pokemon.find((p, i) => {
      if (p.id == req.params.id) {
        pokemon.splice(i, 1);
        return true;
      }
    });

    if (pokemonId) res.json(pokemonId);
    else next();
  });

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

app.get("/moves", async (req, res) => {
  console.log(movesData)
})

app.get("/moves/:id", async (req, res) => {
  const id = req.params
  console.log(id)
})

module.exports = router