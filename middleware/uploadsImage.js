import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  //Destino de guardar la imagen
  destination: "./public/uploads",

  // Nombre de los archivos
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploads = multer({ storage });

export default uploads;
