import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual TMDb API key
        const apiKey = '544a4042c04421e65ef15c092cd32e64';
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        
        // Check if the movie data was retrieved successfully
        if (response.data) {
          setMovie(response.data);
        } else {
          // Handle the case where the movie data is not available
          console.error('Movie not found');
        }
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div>
        <br/> <br/> <br/> <br/>
      {movie ? (
        <div>
          <h2 className='text-white text-2xl font-bold'>{movie?.title}</h2>
          <br/> <br/>
          <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
          <br/> <br/>
          <p className='text-white text-sm'>Release Date: {movie?.release_date}</p>
          <br/> <br/>
          <p className='text-white text-sm'>Overview: {movie?.overview}</p>
          <br/> <br/>
          {/* Add more movie details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
