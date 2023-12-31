import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import apartmentRoutes from './routes/apartmentRoutes.js';
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API is running.....')
});

app.use('/api/houses', apartmentRoutes)

app.use(notFound)
app.use(errorHandler)


app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`);})