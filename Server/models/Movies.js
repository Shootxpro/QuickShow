import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        _id:{type: String, require:true},
        title:{type: String, require:true},
        overview:{type: String, require:true},
        poster_path:{type: String, require:true},
        backdrop_path:{type: String, require:true},
        release_date:{type: String, require:true},
        orignal_language:{type: String, require:true},
        tagline:{type: String, require:true},
        genres: {type: String, require:true},
        casts: {type: String, require:true},
        vote_average: {type: String, require:true},
        runtime: {type: String, require:true},
    },{timestamps:true}
)
        
const Movie = mongoose.model('Movie',movieSchema)

export default Movie;
