import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';
import MovieModal from '../components/MovieModal/index';

export default function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  return (
    <section>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {'<'}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`https://image.tmdb.org/t/p//original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span
            className='arrow'
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {'>'}
          </span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
