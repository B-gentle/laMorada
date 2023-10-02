import express from "express";
import { getApartments, getApartmentsById } from "../controllers/apartmentController.js";
const router = express.Router();

router.get('/', getApartments);

router.get('/:id', getApartmentsById)

export default router