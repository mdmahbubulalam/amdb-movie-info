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
import Footer from './components/Footer/Footer';


function App() {
    const topRated = [
      {
        "Title": "Don't Look Up",
        "Year": "2021",
        "imdbID": "tt11286314",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjZjNDE1NTYtYTgwZS00M2VmLWEyODktM2FlNjhiYTk3OGU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
      },
      {
        "Title": "Spider-Man: No Way Home",
        "Year": "2021",
        "imdbID": "tt10872600",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
      },
      {
        "Title": "No Time to Die",
        "Year": "2021",
        "imdbID": "tt2382320",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
      },
      {
        "Title": "Dune",
        "Year": "2021",
        "imdbID": "tt1160419",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },
      {
        "Title": "The Suicide Squad",
        "Year": "2021",
        "imdbID": "tt6334354",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_SX300.jpg"
      },
      {
        "Title": "Shang-Chi and the Legend of the Ten Rings",
        "Year": "2021",
        "imdbID": "tt9376612",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },

      {
        "Title": "Squid Game",
        "Year": "2021–",
        "imdbID": "tt10919420",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
      },
      {
        "Title": "Free Guy",
        "Year": "2021",
        "imdbID": "tt6264654",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "WandaVision",
        "Year": "2021",
        "imdbID": "tt9140560",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_SX300.jpg"
      },
      {
        "Title": "Loki",
        "Year": "2021–",
        "imdbID": "tt9140554",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg"
      },
      {
        "Title": "Cruella",
        "Year": "2021",
        "imdbID": "tt3228774",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Zack Snyder's Justice League",
        "Year": "2021",
        "imdbID": "tt12361974",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
      },
      {
        "Title": "Aspirants",
        "Year": "2021–",
        "imdbID": "tt14392248",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWRkMjA0NjItMmViYS00MDQyLTgyMWYtOWFmOTA4NmU5MjRjXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg"
      },

      {
        "Title": "Nobody",
        "Year": "2021",
        "imdbID": "tt7888964",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
      },
      {
        "Title": "Jai Bhim",
        "Year": "2021",
        "imdbID": "tt15097216",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
      },
      {
        "Title": "The Falcon and the Winter Soldier",
        "Year": "2021",
        "imdbID": "tt9208876",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_SX300.jpg"
      },
      {
        "Title": "Wrath of Man",
        "Year": "2021",
        "imdbID": "tt11083552",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Luca",
        "Year": "2021",
        "imdbID": "tt12801262",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
      },
      {
        "Title": "Raya and the Last Dragon",
        "Year": "2021",
        "imdbID": "tt5109280",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Arcane",
        "Year": "2021–",
        "imdbID": "tt11126994",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU5OWM5ZTAtNjUzOC00NmUyLTgyOWMtMjlkNjdlMDAzMzU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Mare of Easttown",
        "Year": "2021",
        "imdbID": "tt10155688",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjIyOGU1NzAtODZmYi00NGMzLWJiMjItNGNjNTFjOTM5ZDJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
      },
      {
        "Title": "Shershaah",
        "Year": "2021",
        "imdbID": "tt10295212",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
      },
      {
        "Title": "Dhindora",
        "Year": "2021–",
        "imdbID": "tt14650074",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWM2ZGMzMTktMDVkNS00ZTNhLWFhMDEtMzA2NzU4NGI4NzQ2XkEyXkFqcGdeQXVyMTM5MTQzOTQ0._V1_SX300.jpg"
      },
      {
        "Title": "Invincible",
        "Year": "2021–",
        "imdbID": "tt6741278",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
      }
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
    const [topRatedMovie, setTopRatedMovie] = useState('Best Movie and Series of 2021')
   

    

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
        <Route path='/footer'>
            <Footer/>
        </Route>
        <Route path="/">
            <Home movies={movies} topRatedMovie={topRatedMovie} setSearchValue={setSearchValue}/>
        </Route>
    </Switch>
</Router>
</>
  );
 
}

export default App;
