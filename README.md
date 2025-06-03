Prime Number API
A simple Node.js API that checks if a number is prime or not. This project fetches a random number from an external API and determines its primality.
Features

Check if any number is prime
Fetch random numbers from external API
Simple REST API interface
Environment-based configuration

Prerequisites

Node.js (version 14 or higher)
npm (Node Package Manager)

Installation

Clone the repository:
bashgit clone (https://github.com/geetanjali9361/prime-check-api.git)
cd prime-number-api

Install dependencies:
npm install

Set up configuration:
In a config folder in the root directory and add the following files:

production.json
development.json

Example configuration:
json{
  "port": 3000
}


Usage
Starting the Server
npm start
The server will start on the port specified in your configuration file.

API Endpoints
Check Prime Number

URL: / or /check-prime
Method: GET
Description: Fetches a random number and checks if it's prime
Response:
json{
  "number": 17,
  "isPrime": true,
  "message": "17 is a prime number"
}


Example Request
curl http://localhost:3000/check-prime

Project Structure
prime-number-api/
├── config/
│   ├── development.json
│   └── production.json
├── src/
│   └── app.js
├── package.json
└── README.md

How It Works

The API receives a request
Fetches a random number from an external API
Implements a prime checking algorithm
Returns the result with the number and its prime status

Prime Number Algorithm
The application uses an efficient prime checking algorithm that:

Handles edge cases (numbers ≤ 1)
Checks divisibility up to the square root of the number
Optimizes for performance with larger numbers

Environment Variables
You can configure the following in your JSON config files:

port: Server port number
Any additional API configurations

Contributing

Fork the repository
Create a feature branch
Make your changes
Test your changes
Submit a pull request

License
This project is open source and available under the MIT License.
Author
Your Name - geetanjali9361@gmail.com

Acknowledgments

Thanks to the random number API providers -https://www.randomnumberapi.com/