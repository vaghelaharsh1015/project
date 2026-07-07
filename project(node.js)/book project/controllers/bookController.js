const Book = require('../models/Book');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error fetching books", error: error.message });
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: 'Invalid Book ID', error: error.message });
    }
};

//crete book
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

// update book
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error updating book', error: error.message });
    }
};

// book delet 
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book successfully deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting book', error: error.message });
    }
};

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,   
    deleteBook,   
};