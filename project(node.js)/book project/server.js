const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRotes");
const Book = require("./models/Book");

dotenv.config();
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/books", bookRoutes);

app.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.render("index", { books: books, error: null, editingBook: undefined });
  } catch (error) {
    res
      .status(500)
      .render("index", {
        books: [],
        error: "Error loading books.",
        editingBook: undefined,
      });
  }
});

// edit book ui 
app.get("/edit-ui/:id", async (req, res) => {
  try {
    const books = await Book.find();
    const editingBook = await Book.findById(req.params.id);
    res.render("index", {
      books: books,
      error: null,
      editingBook: editingBook,
    });
  } catch (error) {
    res.redirect("/");
  }
});

// add book 
app.post("/add-book", async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
    });
    await newBook.save();
    res.redirect("/");
  } catch (error) {
    const books = await Book.find();
    res
      .status(400)
      .render("index", {
        books: books,
        error: "Error saving book. Please check your input.",
        editingBook: undefined,
      });
  }
});


// edit book by id
app.post("/edit-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
      },
      { runValidators: true },
    );
    res.redirect("/");
  } catch (error) {
    const books = await Book.find();
    res
      .status(400)
      .render("index", {
        books: books,
        error: "Error updating book.",
        editingBook: undefined,
      });
  }
});

// delete book by id
app.post("/delete-book/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    const books = await Book.find();
    res
      .status(400)
      .render("index", {
        books: books,
        error: "Error deleting book.",
        editingBook: undefined,
      });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
