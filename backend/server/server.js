const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => res.send('API Running'));

// Auth routes
app.use('/api/auth', require('./routes/auth'));

app.post('/api/auth/signup', (req, res) => {
  // ...your signup logic
  res.json({ msg: 'Signup received!', user: req.body });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

console.log('Server is running!');
