import express from "express";
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();

connection.on("Error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso! :-)");
});

const app = express();

routes(app);

export default app;