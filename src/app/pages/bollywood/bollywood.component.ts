import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieApiDataService } from 'src/app/services/movie-api-data.service';
import { MovieDetails } from 'src/app/interfaces/movie-details';

@Component({
  selector: 'app-bollywood',
  templateUrl: './bollywood.component.html',
  styleUrls: ['./bollywood.component.scss'],
})
export class BollywoodComponent implements OnInit {
 
  moviesByName:any;

  //selected movie
  selectedMovieName=''
  selectedMovieNametype=''
  selectedMovieNameyear=''

//all movies
numberOfsearchesResult=''
movies:MovieDetails[]=[];
filteredMovies:MovieDetails[]=[];
movietitle=''
movieName='Tere Naam'
MovieYear=''
bollywoodname='bollywood';
EnterNameOrYear:string|number;
all=true;
  constructor(private http: HttpClient,private movieData:MovieApiDataService) { }

  ngOnInit() {}
  searchMovies()
  {
    // this.movieData.movieEmitter
    // .subscribe((value)=>
    // {
    //   this.moviesByName=value;
    //   console.log(this.moviesByName)
    // })
    this.filteredMovies=[];
    this.movieData.bolywoodMoviesData(this.movieName)
    .subscribe((res: any)=> {
      console.log({res});
      if(res.search && res.search.length > 0) {
        this.numberOfsearchesResult = res.search.length
        this.moviesByName = res;
        this.movies=res.search
        console.log(this.movies)
      }
      this.selectedMovieName =res.search[0].title
      this.selectedMovieNametype=res.search[0].type
      this.selectedMovieNameyear=res.search[0].year
    })
  }
  filterMovies(){
    this.all=false;
    this.filteredMovies=[];
    for(let i=0;i<=this.movies.length;i++)
    {
      if(this.movies[i].year == this.EnterNameOrYear ){
        this.filteredMovies.push(this.movies[i]);
        console.log(this.movies[i])
      }
      else if(this.movies[i].title == this.EnterNameOrYear){
        this.filteredMovies.push(this.movies[i]);
        console.log(this.movies[i])
      }
      else{this.all=true}
    }
  }
  
}
