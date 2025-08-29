import express from "express";
import { getMessage } from "../controllers/exampleController.js";

const router = express.Router();

// Example route
router.get("/message", getMessage);

export default router;
