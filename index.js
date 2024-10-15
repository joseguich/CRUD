import express from "express";
import routes from "./routes/router.js";
import db from "./config/db.js";

const app = express();

//Carpeta estatica
app.use(express.static("public"));

//Plantilla Pug.
app.set("view engine", "pug");
app.set("views", "./views");

//Body Formulario
app.use(express.urlencoded({ extended: true }));

try {
  //Autenticar sequelize.
  await db.authenticate();

  //Crear las columas
  await db.sync();

  console.log("Base de datos conectada");
} catch (error) {
  console.log(error);
}

//Routing
app.use("/", routes);

app.listen(3000, () => {
  console.log("Corriendo en el puerto: http://localhost:3000");
});
