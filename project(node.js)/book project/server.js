const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRotes');
const Book = require('./models/Book');

dotenv.config();
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/books', bookRoutes);

app.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.render('index', { books: books, error: null });
    } catch (error) {
        res.status(500).render('index', { books: [], error: "Error loading books." });
    }
});

app.post('/add-book', async (req, res) => {
    try {
        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price
        });
        await newBook.save();
        res.redirect('/');
    } catch (error) {
        const books = await Book.find(); // Refetch books to render the page correctly
        res.status(400).render('index', { books: books, error: "Error saving book. Please check your input." });
    }
});

const startServer = async () => {
    try {
        await connectDB();
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

startServer();