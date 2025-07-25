import React from 'react';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import BlurCircle from '../components/BlurCircle';

const Movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative mt-24 mb-40 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">

      <BlurCircle top="150px" left="0px"/>
      <BlurCircle bottom="50px" right="50px"/>
  <h1 className="text-lg font-medium text-white mb-6">Now Showing</h1>

  <div className="flex flex-wrap justify-center gap-8">
    {dummyShowsData.map((movie) => (
      <MovieCard movie={movie} key={movie._id} />
    ))}
  </div>
</div>

  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
<h1 className='text-3x1 font-bold text-center'>No movies available</h1>
</div>
  );
};

export default Movies;
  