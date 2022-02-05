import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logo.png';
import search from '../../search.svg';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = (props) => {
    const history = useHistory();
    const [searchText, setSearchText] = useState('')
    const handleClick = (id) =>{
        history.push(`/details/${id}`)
    }

    const refreashPage = () => {
        window.location.reload(); 
    }

     const handleSearchClick = (e)=> {
        e.preventDefault();
        if(searchText){
            props.setSearchValue(searchText)
        }
        
     }

     const handleKeyPress = (e)=> {
        if(e.key === 'Enter'){
            if(searchText){
                props.setSearchValue(searchText)
            }
        }
       
        
     }
    return ( 
        <div className='container mb-3'>
            <div className="row">
                <div className='header-section mt-3 mb-3'>
                    <div className='logo'>
                        <img src={logo} alt="" onClick={refreashPage} />  
                    </div>
                    <div>
                        {/* <input type="text" className='form-control' value={props.value} onChange={(e) => props.setSearchValue(e.target.value)} placeholder='Type to Search.....'/>  */}
                       <form className='pt-2'>
                            <div className="input-group rounded">
                                <input type="search" className="form-control search-box" placeholder="Type to Search..." name="search"
                                 onChange={e => setSearchText(e.target.value)} onKeyPress={handleKeyPress}/>
                                {
                                    searchText ?
                                     <button type="submit" className='search-icon' onClick={handleSearchClick} ><img src={search} alt="" className='p-1'/></button> 
                                     :
                                     <button type="submit" className='search-icon' disabled ><img src={search} alt="" className='p-1'/></button>
                                }
                            </div>
                       </form>
                    </div> 
                </div>

                <h3 className='text-white text-center'>{props.topRatedMovie}</h3>
               

            
        {
            props.movies.map((movie,index) => 
            <div className='col-md-2 col-3 image-container' key={index}> 
                <img src={movie.Poster} alt="" className='mt-2 rounded image'/>   
                <div className='details'>
                    <button className='details-text' onClick={() => handleClick(movie.imdbID)}>Details</button>
                </div> 
            </div>
            )
        }
        
        </div>
        <Footer/>
    </div>
    );
};

export default Home;