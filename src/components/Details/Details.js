import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Details.css'

const Details = () => {
    const [details, setDetails] = useState([]);
    const imdbID = useParams();
    const {Poster,Title,imdbRating,imdbVotes,Year,Rated,Genre,Runtime,Plot,Director,Writer,Actors,Awards,BoxOffice,Country} = details
    

    useEffect(()=>{
        const url = `http://www.omdbapi.com/?i=${imdbID.id}&apikey=ebe8d948`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
      },[imdbID])


    
    return (
        <>
            <Header/>
            <div className='bg-color' >
                <div className='container'>
                    <div className="row ">
                        <div className='m-5 d-flex align-items-center'>
                            <div>
                                <img src={Poster} alt="" className='rounded img-fluid'/>
                            </div>
                            <div className='mx-4 text-white col-md-8'>
                                <h3 className=''>{Title} ({Year})</h3>
                                <p><span className='border p-1'>{Rated}</span>   {Genre} . {Runtime}</p>
                                <p><span className='imdb-logo'>IMDb</span> : {imdbRating} (Vote: {imdbVotes})</p>
                                <h4>Plot</h4>
                                <p>{Plot}</p>
                                <p><span className='text-bold'>Director</span> : {Director}</p>
                                <p><span className='text-bold'>Writer</span> : {Writer}</p>
                                <p><span className='text-bold'>Stars</span> : {Actors}</p>
                                <p><span className='text-bold'>Awards</span> : {Awards}</p>
                                <p><span className='text-bold'>BoxOffice</span> : {BoxOffice}</p>
                                <p><span className='text-bold'>Country</span> : {Country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;