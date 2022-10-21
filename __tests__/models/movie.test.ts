import { Movie } from '../../src/models/movie'

test('valid movie', () => {
  const movieTemp = {
    name: 'Filme',
    director: 'Diretor',
    year: 2000,
    actors: [
      'Ator 1',
      'Ator 2',
      'Ator 3'
    ]
  }
  const validMovie = Movie.build(movieTemp)
  expect(validMovie.name).toBe(movieTemp.name)
  expect(validMovie.director).toBe(movieTemp.director)
  expect(validMovie.year).toBe(movieTemp.year)
  expect(validMovie.actors).toStrictEqual(movieTemp.actors)
})