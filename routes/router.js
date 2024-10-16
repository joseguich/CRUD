import express from "express";
import {
  home,
  viewCreatePost,
  createPost,
} from "../controllers/paginaControllers.js";
import uploads from "../middleware/uploadsImage.js";

const router = express();

router.get("/home", home);
router.get("/desing/crear", viewCreatePost);
router.post("/desing/crear", uploads.single("imagen"), createPost);

export default router;
