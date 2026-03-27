import express from 'express';
import cors from 'cors';
import connectDB from './config/Db.js';
import Router from './routes/handleroutes.js';

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/notes',Router);


connectDB();

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

