import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 878,
      "name": "Fiction"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


const Entertainment = () => {
  const navigate = useNavigate();
  const genrelist = localStorage.getItem('categories').split(',');
  const commonGenres = genres.filter((elem,id)=> genrelist.includes(elem.name));
  const [movie, setMovie ] = useState([])

  useEffect(()=> {

    const getMovieList = async () => {
      const apiKey = 'API_KEY';
      const baseUrl = 'https://api.themoviedb.org/3';

      try {

        const genreMoviesList = commonGenres.map( async genre => {
          const response = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&page=1&page_size=${4}`);
          const data = await response.json();
          return [{"id": genre.id ,"movielist" :data.results.splice(1,4)}];
          
        })
        const genreMovies = await Promise.all(genreMoviesList);
        setMovie(genreMovies.flat())
        
      } catch (error) {
        console.log(error); 
      }
      
    }
    getMovieList();
    

  },[])

 

  useEffect(()=> {
    console.log(movie)
  },[movie])
  const handleToggle = (e) => {
    e.preventDefault();
    navigate('/');
  };

 

  return (
    <div className='entertainment_container'>
      <div className='nav'>
        <p className='logo_text'>Super App</p>
        <div className="profile_logo" onClick={(e) => handleToggle(e)}></div>
      </div>
      <div className="inner_e_container">
        <p className="e_title"> Entertainment according to your choice </p>
        <div className='movies_e_categories'>

       { movie?.map((elem,id) => <div className='movie_e_data' key={id}>
        <p className='e_cat_title'> {genres.find(element => element.id === elem.id)?.name || ''}</p>
        <div className='movies_list' key={id}>  {elem.movielist.map((element,idx )=> <img key={idx} src={`https://image.tmdb.org/t/p/w500${element.poster_path}`} alt='movie_img'/>)}</div></div>)}

        </div>
      </div>
    </div>
  );
};

export default Entertainment;
