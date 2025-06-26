import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard'; // Make sure this is imported
import { dummyShowsData } from '../assets/assets';


  
//   export const dummyShowsData = [
//       {
//           "_id": "324544",
//           "id": 324544,
//           "title": "In the Lost Lands",
//           "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
//           "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
//           "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
//           "genres": [
//               { "id": 28, "name": "Action" },
//               { "id": 14, "name": "Fantasy" },
//               { "id": 12, "name": "Adventure" }
//           ],
//           "casts": dummyCastsData,
//           "release_date": "2025-02-27",
//           "original_language": "en",
//           "tagline": "She seeks the power to free her people.",
//           "vote_average": 6.4,
//           "vote_count": 15000,
//           "runtime": 102,
//       },
//       {
//           "_id": "1232546",
//           "id": 1232546,
//           "title": "Until Dawn",
//           "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
//           "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
//           "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
//           "genres": [
//               { "id": 27, "name": "Horror" },
//               { "id": 9648, "name": "Mystery" }
//           ],
//           "casts": dummyCastsData,
//           "release_date": "2025-04-23",
//           "original_language": "en",
//           "tagline": "Every night a different nightmare.",
//           "vote_average": 6.405,
//           "vote_count": 18000,
//           "runtime": 103,
//       },
//       {
//           "_id": "552524",
//           "id": 552524,
//           "title": "Lilo & Stitch",
//           "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
//           "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
//           "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
//           "genres": [
//               { "id": 10751, "name": "Family" },
//               { "id": 35, "name": "Comedy" },
//               { "id": 878, "name": "Science Fiction" }
//           ],
//           "casts": dummyCastsData,
//           "release_date": "2025-05-17",
//           "original_language": "en",
//           "tagline": "Hold on to your coconuts.",
//           "vote_average": 7.117,
//           "vote_count": 27500,
//           "runtime": 108,
//       },
//       {
//           "_id": "668489",
//           "id": 668489,
//           "title": "Havoc",
//           "overview": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
//           "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
//           "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
//           "genres": [
//               { "id": 28, "name": "Action" },
//               { "id": 80, "name": "Crime" },
//               { "id": 53, "name": "Thriller" }
//           ],
//           "casts": dummyCastsData,
//           "release_date": "2025-04-25",
//           "original_language": "en",
//           "tagline": "No law. Only disorder.",
//           "vote_average": 6.537,
//           "vote_count": 35960,
//           "runtime": 107,
//       }
// ];

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px' />
        <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
        <button
          onClick={() => navigate('/movies')}
          className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
        </button>
      </div>

      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
        {dummyShowsData.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={() => { navigate('/movies'); scrollTo(0, 0); }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
