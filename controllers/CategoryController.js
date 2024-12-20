import { Sequelize } from "sequelize"
import db from "../models"

export async function getCategories(req, res) {
    res.status(200).json({
        message: "Lay ds danh muc thanh cong"
    })
}

export async function getCategoryById(req, res) {
    res.status(200).json({
        message: "Lay thong tin danh muc thanh cong"
    })
}

export async function insertCategory(req, res) {
    const product = await db.DanhMuc.create(req.body)
    res.status(201).json({
        message: "Them danh muc thanh cong",
        data: product
    })
}

export async function deleateCategory(req, res) {
    res.status(200).json({
        message: "Xoa danh muc thanh cong"
    })
}

export async function updateCategory(req, res) {
    res.status(200).json({
        message: "Cap nhap danh muc thanh cong"
    })
}