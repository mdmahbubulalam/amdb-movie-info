import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState([]);
    const imdbID = useParams();
    const {Poster,Title,imdbRating,imdbVotes,Year,Rated,Genre,Runtime,Plot,Director,Writer,Actors,Awards,BoxOffice,Country} = details;

    useEffect(()=>{
        const url = `http://www.omdbapi.com/?i=${imdbID.id}&apikey=ebe8d948`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
      },[imdbID])


    
    return (
        <>
            <Header/>
            {
            Poster ?
            <div className='bg-color' >
                <div className='container'>         
                    <div className="row">
                        <div className='m-5 d-flex align-items-center'>
                            <div>
                                <img src={Poster} alt="" className='rounded img-fluid'/>
                            </div>
                            <div className='mx-4 text-white col-md-8'>
                                <h3 className='text-title-color'>{Title} ({Year})</h3>
                                <p className='mb-2'><span className='border p-1 bg-rated'>{Rated}</span>   {Genre} . {Runtime}</p>
                                <p className='m-0 mt-1'><span className='text-bold imdb-text-color'>IMDb RATING</span> : <span className='text-bold'>{imdbRating}</span>/10</p>
                                <p><span className='text-bold imdb-text-color'>IMDb VOTE</span> : {imdbVotes}</p>
                                <h4 className='text-title-color'>Plot</h4>
                                <p>{Plot}</p>
                                <p><span className='text-bold text-title-color'>Director</span> : {Director}</p>
                                <p><span className='text-bold text-title-color'>Writer</span> : {Writer}</p>
                                <p><span className='text-bold text-title-color'>Stars</span> : {Actors}</p>
                                <p><span className='text-bold text-title-color'>Awards</span> : {Awards}</p>
                                <p><span className='text-bold text-title-color'>BoxOffice</span> : {BoxOffice}</p>
                                <p><span className='text-bold text-title-color'>Country</span> : {Country}</p>
                            </div>
                        </div>
                        <Footer/>
                    </div>  
                </div>
            </div>
            :
            <div className='mt-5 d-flex justify-content-center'>
                <div className="spinner-border text-info" role="status">
                
                </div>  
            </div>
                
          }
        </>
    );
};

export default Details;