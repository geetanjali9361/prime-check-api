const express = require('express');
const axios = require('axios');

const primeNum = async (req, res) => {
    try {
        const response = await axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1');
        const num = response.data[0]; // extract number from array

        // Prime check logic
        if (num <= 1) {
            return res.json({ number: num, isPrime: false });
        }
        if (num === 2) {
            return res.json({ number: num, isPrime: true });
        }
        if (num % 2 === 0) {
            return res.json({ number: num, isPrime: false });
        }

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                return res.json({ number: num, isPrime: false });
            }
        }

        return res.status(200).json({ number: num, isPrime: true });

    } catch (error) {
        console.log("Failed to fetch random number or process request",error)
        res.status(500).json({ error: 'Failed to fetch random number or process request' });
    }
};

module.exports = {
    primeNum
};
