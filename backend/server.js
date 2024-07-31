import express from 'express';
import dotenv from 'dotenv'
import productRoutes from "./routes/productRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

connectDB();

app.use ('/api/products',productRoutes);//when going to this route api/products will be processed via productRoutes

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);
app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);