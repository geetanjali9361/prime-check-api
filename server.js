const express = require('express');
const { PORT } = require("./config");
const app = express();
app.use(express.json()); 

// Check if PORT is available
if (!PORT) {
    PORT = 3000;
}
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`The server is running on http://localhost:${PORT}`);
});
