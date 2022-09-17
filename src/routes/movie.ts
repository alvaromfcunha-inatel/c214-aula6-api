import { Router } from "express";
import { Movie } from "../models/movie";

const router = Router()

router.get('/movie', async (req, res) => {
  const messages = await Movie.find({})
  return res.status(200).send(messages)
})

router.post('/movie', (req, res) => {
  const { name, director, year, actors } = req.body

  if(name && director && year && actors) {
    const movie = Movie.build({ name, director, year, actors })
    
    movie.save().then(() => {
      return res.status(200).send(movie)
    }).catch(err => {
      return res.status(400).send({ error: err })
    })
  } else {
    return res.status(400).send({ error: 'misssing body data' })
  }

})

export { router as movieRouter }