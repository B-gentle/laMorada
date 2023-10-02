import asyncHandler from "../middleware/asyncHandler.js";
import Apartment from "../models/apartmentModel.js";

//@desc     Fetch all apartments from DB
// @route   Get /api/houses
// @access  Public
const getApartments = asyncHandler(async (req, res) => {
  const apartments = await Apartment.find({});
  res.json(apartments);
});

//@desc     Fetch all apartments from DB
// @route   Get /api/houses/:id
// @access
const getApartmentsById = asyncHandler(async (req, res) => {
  const apartment = await Apartment.findById(req.params.id);

  if (apartment) {
    res.json(apartment);
  } else {
    res.status(404);
    throw new Error("apartment not found");
  }
});

export { getApartments, getApartmentsById };
