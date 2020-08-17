const router = require("express").Router();
const axios = require("axios")


// Matches with routes "/google/newbooks/:title"
router.get("/newbooks/:title", (req, res) => {
    console.log('router.get caslled');
    var titleQuery = req.params.title
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + titleQuery).then(response => {
        res.json(response.data.items)
    })
})

module.exports = router