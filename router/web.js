import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage)
  router.get('/register', homeController.createRegisterPage)
  router.get('/creatshop', homeController.creatStorePage)
  return app.use("/", router);
};

module.exports = initWebRoutes;
