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
    const cuahang = await db.CuaHang.create(req.body)
    res.status(201).json({
        message: "Them cua hang thanh cong",
        data: cuahang
    })
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