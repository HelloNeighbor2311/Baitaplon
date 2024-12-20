import { Sequelize } from "sequelize"
import db from "../models"

export async function getServices(req, res) {
    res.status(200).json({
        message: "Lay ds dich vu thanh cong"
    })
}

export async function getServiceById(req, res) {
    res.status(200).json({
        message: "Lay thong tin dich vu thanh cong"
    })
}

export async function insertService(req, res) {
    const service = await db.DichVu.create(req.body)
    return res.status(201).json({
        message: "Them dich vu thanh cong",
        data: service
    })
       
}

export async function deleateService(req, res) {
    res.status(200).json({
        message: "Xoa dich vu thanh cong"
    })
}

export async function updateService(req, res) {
    res.status(200).json({
        message: "Cap nhap dich vu thanh cong"
    })
}