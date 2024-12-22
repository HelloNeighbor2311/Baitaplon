import db from "../models/index"
let getHomePage = async (req, res) => {
    return res.render('homepage.ejs', {
        data: JSON.stringify(data)
    })
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