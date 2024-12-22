import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./router/web";
import connectDB from "./config/connectDB"
import { AppRouter } from './router/WebRouter'

require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

AppRouter(app)
viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process?.env?.PORT ?? 3000 //Mac dinh post la 3000
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
