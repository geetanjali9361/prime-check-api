const express = require('express');
const router = express.Router();
const prime = require("../controller/isPrimeOrNot")

// Route definition
router.get('/', (req, res) => {
    res.status(200).json({ message: "The server is running" });
});

router.get('/is-prime', prime.primeNum)

module.exports = router;