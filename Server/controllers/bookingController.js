import Show from "../models/Show.js";
import Booking from "../models/Booking.js"; // Don't forget to import Booking model!

// Function to check availability of selected seats for a movie
const checkSeatsAvailability = async (showId, selectedSeats) => {
  try {
    const showData = await Show.findById(showId);
    if (!showData) return false;

    const occupiedSeats = showData.occupiedSeats;

    const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

    return !isAnySeatTaken;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

// Create booking
export const createBooking = async (req, res) => {
  try {
    const { userId } = req.auth(); // Assuming Clerk or custom auth middleware
    const { showId, selectedSeats } = req.body;
    const { origin } = req.headers;

    // Check if the seat is available for selected show
    const isAvailable = await checkSeatsAvailability(showId, selectedSeats);

    if (!isAvailable) {
      return res.json({ success: false, message: "Selected seats are not available" });
    }

    // Get the show details
    const showData = await Show.findById(showId).populate("movie");

    // Create a new booking
    const booking = await Booking.create({
      user: userId,
      show: showId,
      amount: showData.showPrice * selectedSeats.length,
      bookedSeats: selectedSeats
    });

    // Mark selected seats as occupied
    selectedSeats.forEach((seat) => {
      showData.occupiedSeats[seat] = userId;
    });

    showData.markModified("occupiedSeats");
    await showData.save();

    // TODO: Stripe payment logic here...

    res.json({ success: true, message: "Booked successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Function to get data of occupied seats
export const getOccupiedSeats = async (req, res) => {
  try {
    const { showId } = req.params;
    const showData = await Show.findById(showId);

    const occupiedSeats = Object.keys(showData.occupiedSeats);

    res.json({ success: true, occupiedSeats });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
