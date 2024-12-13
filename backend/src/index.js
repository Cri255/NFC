const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
});
