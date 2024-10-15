import express from "express";
import { home } from "../controllers/paginaControllers.js";

const router = express();

router.get("/home", home);

export default router;
