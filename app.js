const express = require('express')
const app = express()
const port = 3000;

app.set("view engine", "ejs")

app.listen(3000)

app.get("/", (req, res) => {
    res.render('index', {title: 'Home'})
    res.send("Hello Express!")
})

app.post("/user", (req, res) => {
    res.render('about', {title: 'Home'})
    res.send("Received a POST request for user!");
  });

app.get("/", (req, res) => {
    res.render('404', {title: 'Home'})
    res.send("Try navigating to /user.");
  });

app.use((req, res) => {
    res.status(404)
    res.json({ error: "Resource not found." })
  })

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
})