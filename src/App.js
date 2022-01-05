import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details/Details';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Home from './components/Home/Home';


function App() {
    const topRated = [
        {
            "Title": "The Shawshank Redemption",
            "Year": "1994",
            "imdbID": "tt0111161",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          },
          {
            "Title": "The Godfather",
            "Year": "1972",
            "imdbID": "tt0068646",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "The Godfather: Part II",
            "Year": "1974",
            "imdbID": "tt0071562",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "The Dark Knight",
            "Year": "2008",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
          },
          {
            "Title": "12 Angry Men",
            "Year": "1957",
            "imdbID": "tt0050083",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
          },
          {
            "Title": "Schindler's List",
            "Year": "1993",
            "imdbID": "tt0108052",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
          },

          {
            "Title": "The Lord of the Rings: The Return of the King",
            "Year": "2003",
            "imdbID": "tt0167260",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "Pulp Fiction",
            "Year": "1994",
            "imdbID": "tt0110912",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "The Good, the Bad and the Ugly",
            "Year": "1966",
            "imdbID": "tt0060196",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg"
          },
          {
            "Title": "The Lord of the Rings: The Fellowship of the Ring",
            "Year": "2001",
            "imdbID": "tt0120737",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
          },
          {
            "Title": "Fight Club",
            "Year": "1999",
            "imdbID": "tt0137523",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "Forrest Gump",
            "Year": "1994",
            "imdbID": "tt0109830",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          },
          {
            "Title": "Planet Earth",
            "Year": "2006",
            "imdbID": "tt0795176",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_SX300.jpg"
          },

          {
            "Title": "Breaking Bad",
            "Year": "2008–2013",
            "imdbID": "tt0903747",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          },
          {
            "Title": "Band of Brothers",
            "Year": "2001",
            "imdbID": "tt0185906",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SX300.jpg"
          },
          {
            "Title": "Chernobyl",
            "Year": "2019",
            "imdbID": "tt7366338",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg"
          },
          {
            "Title": "The Wire",
            "Year": "2002–2008",
            "imdbID": "tt0306414",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"
          },
          {
            "Title": "Blue Planet II",
            "Year": "2017",
            "imdbID": "tt6769208",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
          },
          {
            "Title": "Our Planet",
            "Year": "2019",
            "imdbID": "tt9253866",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
          },
          {
            "Title": "Cosmos: A Spacetime Odyssey",
            "Year": "2014",
            "imdbID": "tt2395695",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          },
          {
            "Title": "Dirilis: Ertugrul",
            "Year": "2014–2019",
            "imdbID": "tt4320258",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwM2Y5NzMtMzQzZC00YTE5LTlmYzctMzc2M2E5NGQ2YjFjXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg"
          },
          {
            "Title": "Cosmos",
            "Year": "1980",
            "imdbID": "tt0081846",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          },
          {
            "Title": "The Sopranos",
            "Year": "1999–2007",
            "imdbID": "tt0141842",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
          },
          {
            "Title": "Batman: The Animated Series",
            "Year": "1992–1995",
            "imdbID": "tt0103359",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
          },
    ] 

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    

    const topRatedList = shuffle(topRated);
    const [movies, setMovies] = useState (topRatedList);
    const [searchValue, setSearchValue] = useState('');
    const [topRatedMovie, setTopRatedMovie] = useState('Top Rated Movie and TVSeries')
   

    

      useEffect(()=>{
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ebe8d948`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data.Search){
                setMovies(data.Search)
                setTopRatedMovie('Search Result')
            }
        })
      },[searchValue])
    
   
  return (
      <>
     
    <Router>
    <Switch>
        <Route path='/home'>
            <Home movies={movies} topRatedMovie={topRatedMovie} setSearchValue={setSearchValue}/>
        </Route>
        <Route path='/details/:id'>
            <Details/>
        </Route>
        <Route path="/">
            <Home movies={movies} searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Route>
    </Switch>
</Router>
</>
  );
 
}

export default App;
