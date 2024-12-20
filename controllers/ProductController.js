import { Sequelize } from "sequelize"
import db from "../models"
import InsertProducRequest from "../DataTransferObjects/requests/InsertProducRequest"

export async function getProduct(req, res) {
    // const products = await db.SanPham.findAll()
    res.status(200).json({
        message: "Lay danh sach san pham thanh cong!",
        // data: products
    })
}

export async function getProductById(req, res) {
    const {id} = req.params
    const product = await db.SanPham.findByPk(id)
    if(!product){
        return res.status(404).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
    
    res.status(200).json({
        message: "Lay thong tin san pham thanh cong",
        data: product
    })
}

export async function insertProduct(req, res) {
<<<<<<< HEAD
    try {
=======
>>>>>>> 91bf4d1ed0a955ba91794c118f7b07e6ef10cdca
        // console.log(JSON.stringify(req.body))
        const product = await db.SanPham.create(req.body)
        return res.status(201).json({
            message: "Them san pham thanh cong",
            data: product
        })
}

export async function deleateProduct(req, res) {
    res.status(200).json({
        message: "Xoa san pham thanh cong"
    })
}

export async function updateProduct(req, res) {
    res.status(200).json({
        message: "Cap nhap san pham thanh cong"
    })
}