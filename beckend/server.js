import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5000;
import mongoose from "mongoose"
const app = express();

const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log(`MongoDB Connected: ${result.connection.host}`);
  })
  .catch((err) => console.log(err));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));