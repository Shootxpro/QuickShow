import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { Heart, StarIcon, PlayCircleIcon } from 'lucide-react';
import DateSelect from '../components/DateSelect';
import timeFormat from '../lib/timeFormat';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard'; // Make sure this exists

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShow = async () => {
      const foundShow = dummyShowsData.find(show => show._id === id);
      if (foundShow) {
        setShow({
          movie: foundShow,
          dateTime: dummyDateTimeData,
        });
      }
    };

    getShow();
  }, [id]);

  if (!show) return <Loading />;

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-28 md:pt-32 text-white">
      {/* Top section with poster and info */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-96 w-72 object-cover shadow-md"
        />

        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />
          <p className="text-primary uppercase text-sm">English</p>
          <h1 className="text-4xl font-semibold max-w-xl leading-tight">{show.movie.title}</h1>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-xl">{show.movie.overview}</p>

          <p className="text-sm text-gray-400">
            {timeFormat(show.movie.runtime)} · {show.movie.genres.map(g => g.name).join(', ')} ·{' '}
            {show.movie.release_date.split('-')[0]}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm hover:bg-primary-dull transition">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>

            <a
              href="#dateSelect"
              className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition"
            >
              Buy Tickets
            </a>

            <button className="p-2 border border-gray-600 rounded-full hover:bg-gray-800 transition">
              <Heart className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Cast section */}
      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="rounded-full h-20 md:h-20 aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Select */}
      <div id="dateSelect">
        <DateSelect dateTime={show.dateTime} id={id} />
      </div>

      {/* Recommended movies */}
      <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
      <div className="flex flex-wrap justify-center gap-8">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* Show more button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {navigate('/movies');scrollTo(0,0);}}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
