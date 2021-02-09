const router = require("express").Router();
const bookRoutes = require("./booksroutes");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
