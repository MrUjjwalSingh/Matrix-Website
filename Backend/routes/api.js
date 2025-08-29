import express from "express";
import { getMessage } from "../controllers/exampleController.js";
import { getProjects } from "../controllers/projectsController.js";
import { getEvents } from "../controllers/eventsController.js";
import { getTeamMembers } from "../controllers/teamController.js";
import { getGalleryImages } from "../controllers/galleryController.js";

const router = express.Router();

// Example route
router.get("/message", getMessage);

// Data routes
router.get("/projects", getProjects);
router.get("/events", getEvents);
router.get("/team", getTeamMembers);
router.get("/gallery", getGalleryImages);

export default router;
