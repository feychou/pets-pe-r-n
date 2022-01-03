import express from 'express';

import {
  getPets,
  getPet
} from '../controllers/pets.js';
const api = express.Router();

api
  .route('/')
  .get(getPets)
  //post endpoint

api
  .route('/:id')
  .get(getPet)
  //delete endpoint
  //put endpoint

export default api;