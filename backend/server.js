// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const authRouter = require('./routes/auth');
const itemsRouter = require('./routes/items-route');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRouter);
app.use('/api/items', itemsRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// MongoDB Connection
mongoose.connect('mongodb+srv://chamuboy:Believeinchamu4@mernapp.tk3xxks.mongodb.net/?retryWrites=true&w=majority&appName=Mernapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Lost and Found API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
