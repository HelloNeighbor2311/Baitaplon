import { Sequelize } from "sequelize"
import db from "../models"

export async function getShops(req, res) {
    res.status(200).json({
        message: "Lay ds cua hang thanh cong"
    })
}

export async function getShopById(req, res) {
    res.status(200).json({
        message: "Lay thong tin cua hang thanh cong"
    })
}

export async function insertShop(req, res) {
    try {
            // console.log(JSON.stringify(req.body))
            const product = await db.CuaHang.create(req.body)
            res.status(201).json({
                message: "Them cua hang thanh cong",
                data: product
            })
        }
        catch (error) {
            res.status(500).json({
                message: "Them cua hang that bai",
                error: error.message
            })
        }
}

export async function deleateShop(req, res) {
    res.status(200).json({
        message: "Xoa cua hang thanh cong"
    })
}

export async function updateShop(req, res) {
    res.status(200).json({
        message: "Cap nhap cua hang thanh cong"
    })
}