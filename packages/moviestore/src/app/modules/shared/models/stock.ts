import { Movie } from './movie'

export class Stock {
  id: number
  movieId: number
  state: number
  creation_date: Date
  movie?: Movie
}
