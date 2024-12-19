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
    // const { error } = InsertProducRequest.validate(req.body)
    // if(error) {
    //     return res.status(400).json({
    //         message: "Them dich vu that bai",
    //         error: error.details[0]?.message,
    //     });
    // }
    try {
        // console.log(JSON.stringify(req.body))
        const Service = await db.DichVu.create(req.body)
        return res.status(201).json({
            message: "Them dich vu thanh cong",
            data: Service
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Them dich vu that bai",
            error: error.message
        })
    }    
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