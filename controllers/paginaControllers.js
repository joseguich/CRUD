const home = (req, res) => {
  res.render("layouts/index", {
    pagina: "Inicio",
  });
};

const viewCreatePost = (req, res) => {
  res.render("desing/crear", {
    pagina: "Crear Publicación",
  });
};

const createPost = (req, res) => {
  console.log(req.body);
};

export { home, viewCreatePost, createPost };
