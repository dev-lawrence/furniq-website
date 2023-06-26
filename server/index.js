// Import required packages
const express = require('express');
const cors = require('cors');
const stripe = require('./routes/stripe');
require('dotenv').config();

// Create Express app
const app = express();

app.use(express.json());
app.use(cors());

app.use('/stripe', stripe);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
