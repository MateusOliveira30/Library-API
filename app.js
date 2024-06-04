import express from 'express';
import books from './data.js';
import { v4 as uuidv4 } from 'uuid';

const baseRoute = '/api/library';

const app = express();
app.use(express.json());

app.get(baseRoute, (req, res) => {

    res.status(200).send(books)
});

app.get(baseRoute + '/book-by-id/:id', (req, res) => {
    const {id} = req.params
    const selectBookById = books.find(book => book.id === id)
    if(!selectBookById){
        res.status(404).send("Book not found. Please, verify the ID")
        return
    }
    res.status(200).send(selectBookById)
})

app.get(baseRoute + '/book-by-name/:title', (req, res) => {
    const {title} = req.params
    const selectBookByTitle = books.find(book => book.title === title)
    if(!selectBookByTitle){
        res.status(404).send("This book title dosen't exist in library")
        return
    }
    res.status(200).send(selectBookByTitle)
})

app.get(baseRoute + '/book-by-author/:author', (req, res) => {
    const {author} = req.params
    const selectBookByAuthor = books.find(book => book.author === author)
    if(!selectBookByAuthor){
        res.status(404).send("This book title dosen't exist in library")
        return
    }
    res.status(200).send(selectBookByAuthor)
})

app.get(baseRoute + '/book-by-year/:year', (req, res) => {
    const {year} = req.params
    const selectBookByYear = books.find(book => book.year === parseInt(year))
    if(!selectBookByYear){
        res.status(404).send("This book title dosen't exist in library")
        return
    }
    res.status(200).send(selectBookByYear)
})

app.delete(baseRoute + '/delete-book-by-id/:id', (req, res) => {
    const { id } = req.params;
    const selectBookById = books.find((b) => b.id === id);
    if(!selectBookById){
        res.status(404).send(`Books with this ${id} not founded`);
        return;
    }
    const index = books.indexOf(selectBookById);
    books.splice(index, 1);
    res.status(200).send(selectBookById);
})

app.delete(baseRoute + '/delete-book-by-title/:title', (req, res) => {
    const { title } = req.params;
    const selectBookByTitle = books.find((b) => b.title === title);
    if(!selectBookByTitle){
        res.status(404).send(`Book with this ${title} not founded`);
        return;
    }
    const index = books.indexOf(selectBookByTitle);
    books.splice(index, 1);
    res.status(200).send(selectBookByTitle);
})

app.delete(baseRoute + '/delete-book-by-year/:year', (req, res) => {
    const { year } = req.params;
    const selectBookByYear = books.find((b) => b.year === parseInt(year));
    if(!selectBookByYear){
        res.status(404).send(`Books in ${year} not founded`);
        return;
    }
    const index = books.indexOf(selectBookByYear);
    books.splice(index, 1);
    res.status(200).send(selectBookByYear);
})

app.delete(baseRoute + '/delete-book-by-author/:author', (req, res) => {
    const { author } = req.params;
    const selectBookByAuthor = books.find((b) => b.author === author);
    if(!selectBookByAuthor){
        res.status(404).send(`Books by this ${author} not found`);
        return;
    }
    const index = books.indexOf(selectBookByAuthor);
    books.splice(index, 1);
    res.status(200).send(selectBookByAuthor);
})

app.post(baseRoute + '/add-book', (req, res) => {
    const newBook = {...req.body, id: uuidv4()}
    books.push(newBook)
    res.status(200).send(newBook)
})

app.listen(3001);
