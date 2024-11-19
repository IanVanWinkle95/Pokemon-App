const express = require('express')
const app = express()
const port = 3000;

const error = require("./utilities/error")

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.static('public'))

const pokemonRoutes = require('./Routes/pokemonRoutes')
app.use('/pokemon', pokemonRoutes)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use((req, res, next) => {
    const time = new Date();

    console.log(
        `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data:");
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

app.use((req, res) => {
    res.status(404)
    res.json({ error: "Resource not found." })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})