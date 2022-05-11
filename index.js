const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view option", { layout: false })
app.use("/static", express.static("public"))


app.get('/', (req, res) => {
    fs.readFile('book.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            const obj = JSON.parse(data)
            const title = obj.books.map((e) => e.title)
            const allElements = []
            for (let i = 0; allElements.length <= 2; i++) {
                const randomBooks = title[Math.floor(Math.random() * title.length)]
                allElements.push(randomBooks)
            }
            res.render('index', { data: allElements })
        }
    })
})








app.listen(3000)
console.log(`'app is cominig ' at ${port}`)
