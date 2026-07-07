const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }
};

// @desc    Get single book
// @route   GET /api/books/:id
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        // Catches invalid ObjectId formats
        res.status(400).json({ message: 'Invalid Book ID', error: error.message });
    }
};

// @desc    Create a book
// @route   POST /api/books
const createBook = async (req, res) => {
    try {
        const { title, author, price, inStock } = req.body;
        if (!title || !author || !price) {
            return res.status(400).json({ message: 'Please provide title, author, and price' });
        }
        const newBook = new Book({ title, author, price, inStock });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error creating book', error: error.message });
    }
};

// We can add updateBook and deleteBook here as well.

module.exports = {
    getBooks,
    getBookById,
    createBook,
};