import dotenv from 'dotenv';
import colors from 'colors';
import express from "express";

import pets from './api/pets.js';
dotenv.config();

const PORT = process.env.PORT || 3000;
const server = express();

server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to the pet server!'));
server.use('/api/pets', pets);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`.rainbow));
