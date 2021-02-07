const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/api/books")
    .get()

router.route("/api/books")
    .post()

router.route("/api/books/:id")
    .delete()



// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;