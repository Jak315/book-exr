const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.use(express.json())
app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view option", { layout: false })


app.get('/', (req, res) => {
    const data = fs.readFile('book.json', (err, data) => {
        if (err) {
            throw err;
        } else {
            const booksA = JSON.parse(data)
            // console.log(data);
            const Book = booksA.books
            // console.log(Book);
            const titles = Book.map(e => e.title)
            // res.send(titles)
            const isbn = Book.map(e => e.isbn)
            console.log(Book);
            res.render('index', { sda: Book })
        }
    })
})

app.listen(3000)
console.log(`'app is cominig ' at ${port}`)
