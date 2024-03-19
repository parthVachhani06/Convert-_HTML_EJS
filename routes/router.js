const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/about', (req, res) => {
    res.render("about");
});

router.get('/contect', (req, res) => {
    res.render("contect");
});

router.get('/ourmenus', (req, res) => {
    res.render("ourmenus");
});

router.get('/reservation', (req, res) => {
    res.render("reservation");
});

module.exports = router;

