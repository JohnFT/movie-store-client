import { Component, OnInit } from '@angular/core'
import { MovieService } from '../shared/services/movie.service'
import { Movie } from '../shared/models/movie'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movie: Movie
  public movies: Movie[]
  constructor(private service: MovieService) {}

  ngOnInit() {
    this.service.getAll().subscribe(movies => {
      if (!movies) {
        return
      }

      const index = Math.floor(Math.random() * movies.length)
      this.movie = movies[index]
      this.movies = movies.filter(movie => movie.id !== this.movie.id)
    })
  }
}
