import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Post = db.define("post", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Post;
