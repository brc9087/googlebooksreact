import axios from "axios"

export default {
    // Get books from Google Book API, query is what use request
    getGoogleBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Get all books
    getSavedBooks: function () {
        return axios.get("/api/books");
    },

    // Grabs the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // Saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}