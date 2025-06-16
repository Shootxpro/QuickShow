import axios from "axios"
import Movie from "../models/Movies.js";

// ApI to get now playing movies from TMDB API
export const getNowPlayingMovies = async (req, res) =>{
    try {
    const {data} =await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
    headers: {Authorization:`Bearer &{process.env.TMDB_API_KEY}`}
})    

     const movies = data.results;
     res.json({sucess:true,movies:movies})
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
    }
}

// Api to add a new show to database
 export const addShow = async(req,res)=>{
    try {
        const {movieId,showInput, showPr} =req. body

        let movie = await Movie.findById(movieId)

        if(!movie){
            // fetch movie details and credits from TMDB Appi
                 const [movieDetailsResponse,movieCreditsRespose] = await Promise.all([
                    axios.get(` `)
                 ])
        }
    } catch (error) {
       console.log(error);
        res.json({sucess:false,message:error.message})
    }
 } 

