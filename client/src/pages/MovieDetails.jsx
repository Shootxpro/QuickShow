import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { Heart, StarIcon, PlayCircleIcon } from 'lucide-react';
import timeFormat from '../lib/timeFormat';

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id);
    setShow({
      movie: show,
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-28 md:pt-32 text-white">
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Movie Poster */}
        <img
          src={show.movie.poster_path}
          alt=""
          className="max-md:mx-auto rounded-xl h-96 w-72 object-cover shadow-md"
        />

        {/* Movie Info */}
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

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm hover:bg-primary-dull transition">
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>

            <a
              href="#"
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
    </div>
  ) : (
    <div className="text-center py-20 text-gray-300 text-lg">Loading...</div>
  );
};

export default MovieDetails;
