import db from "../models/index"
let getHomePage =  (req, res) => {
    return res.render('homepage.ejs');
}

let createRegisterPage = (req, res) => {
    return res.render('createRegister.ejs');
}

let creatStorePage = (req, res) => {
    return res.render('createShop.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    createRegisterPage: createRegisterPage,
    creatStorePage: creatStorePage
}