import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { movieRouter } from './routes/movie';

const app = express()
const API_PORT = 3000

mongoose.connect('mongodb://localhost:27017/aula6-api', {}, () => {
  console.log(`Conectado no mongo.`)
})

app.use(bodyParser.json())
app.use(movieRouter)

app.listen(API_PORT, () => {
  console.log(`Escutando na portera: ${API_PORT}`)
})