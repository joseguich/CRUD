import express from "express";
import {
  home,
  viewCreatePost,
  createPost,
} from "../controllers/paginaControllers.js";

const router = express();

router.get("/home", home);
router.get("/desing/crear", viewCreatePost);
router.post("/desing/crear", createPost);

export default router;
