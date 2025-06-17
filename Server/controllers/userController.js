import { clerkClient } from "@clerk/express";
import Booking from "../models/Booking.js";


// API Controller Funtion to get user bookings
export const getUserBookings = async (req,res)=>{
    try{
        const user = req.auth().userId;

        const bookings = await Booking.find({user}).populate({
            path:"show",
            populate:{path:"movie"}
        }).sort({createdAt :-1})
        res.json({success:true,bookings})
    }catch (error){
         console.error(error.message);
         res.json({success:false,message:error.message});
        }
    }
     
    // API Controller Funtion to ADD Favorite Movie in clerk User metadata
export const addFavorite = async (req , res) => {
    try {
        const {movieId} = req.body;
        const userId = req.auth().userId;

        const user = await clerkClient.users.getUser(userId)

        if(!user.privateMetadata.favorites){
            user.privateMetadata.favorites = []
        }

        if(!user.privateMetadata.favorites.includes(movieId)){
            user.privateMetadata.favorites.push(movieId)
        }

        await clerkClient.user
    } catch (error) {
        
    }
}
