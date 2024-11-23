// Had a ton of help from Luis with this project with figuring out my routes and controllers.
// Was going to try an implement the data to show up on the page but did not have time. 
// All the data gathered when searching for pokemon/badges show up in the browser console.

const express = require('express')
const app = express()
const fs = require('fs')
const pokemonRoutes = require('./Routes/pokemonRoutes')
const port = 3000
const error = require("./utilities/error")
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const pug = require("pug")
const router = express.Router()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.json())
app.use(express.static('public'))

app.use(cors({ origin: "*" }))
app.use(express.static(path.join(__dirname)))
app.use(express.urlencoded({ extended: true }))

const pokemonData = require('./data/pokedex')
const badgeData = require('./data/badges')

// const router = require('./Routes/pokemonRoutes')
app.use(router)
app.use('/', router)
app.use('/pokemon', router)
app.use('/pokemon', pokemonRoutes)

// router.get('/', function (req, res) {
//     res.render(path.join(__dirname, "index"))
// })

router.get("/", function (req, res) {
    res.render("index", {})
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

router.route("/pokemon").get((req, res) => {
    // const pokemonObjects = pokemon
    res.json({ pokemonData })
    // console.log(pokemonData)
})

app.get("/pokemon/:id", async (req, res) => {
    const id = req.params.id
    const individualPokemon = pokemonData.find((p) => {
        return p.name == id
        // console.log(id)
    })
    res.json({individualPokemon})
})

router.route("/badge").get((req, res) => {
    res.json({ badgeData })
})

app.get("/badge/:id", async (req, res) => {
    const id = req.params.id
    const individualBadge = badgeData.find((b) => {
        return b.name == id
    })
    res.json({individualBadge})
})

app.use((req, res, next) => {
    const time = new Date()

    console.log(
        `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    )
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data:");
        console.log(`${JSON.stringify(req.body)}`)
    }
    next();
})

app.post('/pokemon', (req, res) => {
    const { name } = req.body
    const newPokemon = { id: pokemonData.length + 1, name }
    pokemonData.push(newPokemon)
    res.json(newPokemon)
  })

app.use((req, res) => {
    res.status(404)
    res.json({ error: "Resource not found." })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({ error: err.message })
})

app.listen(3000, () => {
    console.log(`Server listening on port: ${port}.`)
})

