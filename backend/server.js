import express, { urlencoded } from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js'; 
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import uploadRoutes from './routes/uploadRoutes.js';
import path from 'path';

dotenv.config();
const port = process.env.PORT;

connectDB();
const app = express();
//Body parser middleware
app.use(express.json());
app.use(urlencoded({ extended: true}));

//cookieParser middleware

app.use(cookieParser());

app.get('/',(req, res) => {
    res.send('Api is running...');
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal', (req, res) => res.send({
    clientId: process.env.PAYPAL_CLIENT_ID
}));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));