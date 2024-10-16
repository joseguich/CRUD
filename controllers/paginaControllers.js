import { check, validationResult } from "express-validator";
import Post from "../models/Post.js";

const home = async (req, res) => {
  const posts = await Post.findAll();
  res.render("layouts/index", {
    pagina: "Inicio",
    posts,
  });
};

const viewCreatePost = (req, res) => {
  res.render("desing/crear", {
    pagina: "Crear Publicación",
  });
};

const createPost = async (req, res) => {
  const { titulo, descripcion, imagen } = req.body;
  // const { filename } = req.file;

  await check("titulo")
    .notEmpty()
    .withMessage("El campo Titulo es requerido")
    .run(req);
  await check("descripcion")
    .notEmpty()
    .withMessage("El campo Descripción es requerido")
    .isLength({ max: 500 })
    .withMessage("La descripción debe tener 500 caracteres")
    .run(req);

  const result = validationResult(req);

  if (!result.isEmpty()) {
    res.render("desing/crear", {
      pagina: "Crear Publicación",
      errores: result.array(),
    });
  }
  console.log(req.file);

  await Post.create({
    titulo,
    descripcion,
    imagen: req.file.filename,
  });

  res.render("template/mensaje", {
    pagina: "Publicación creada",
    mensaje: "Publicación creada correctamente",
  });
};

export { home, viewCreatePost, createPost };
