const express = require('express'); // Bring Express
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
