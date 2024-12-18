import { Sequelize } from "sequelize"
import db from "../models"
// import InsertProducRequest from "../DataTransferObjects/requests/InsertProducRequest"

export async function getProduct(req, res) {
    res.status(200).json({
        message: "Lay ds san pham thanh cong"
    })
}

export async function getProductById(req, res) {
    res.status(200).json({
        message: "Lay thong tin san pham thanh cong"
    })
}

export async function insertProduct(req, res) {
    // const { error } = InsertProducRequest.validate(req.body)
    // if(error) {
    //     return res.status(400).json({
    //         message: "Them san pham that bai",
    //         error: error.details[0]?.message,
    //     });
    // }
    try {
        // console.log(JSON.stringify(req.body))
        const product = await db.SanPham.create(req.body)
        return res.status(201).json({
            message: "Them san pham thanh cong",
            data: product
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Them san pham that bai",
            error: error.message
        })
    }    
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