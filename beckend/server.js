import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5000;
import mongoose from "mongoose"
import productRoutes from "./routes/productRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

const app = express();


const connectDB = mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => {
    console.log(`MongoDB Connected: ${result.connection.host}`);
  })
  .catch((err) => console.log(err));

app.use ('/api/products',productRoutes);//when going to this route api/products will be processed via productRoutes

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));