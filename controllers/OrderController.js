export async function getOrders(req, res) {
    res.status(200).json({
        message: "Lay ds don hang thanh cong"
    })
}

export async function getOrderById(req, res) {
    res.status(200).json({
        message: "Lay thong tin don hang thanh cong"
    })
}

export async function insertOrder(req, res) {
    const service = await db.DichVu.create(req.body)
    return res.status(201).json({
        message: "Them dich vu thanh cong",
        data: service
    })
}

export async function deleateOrder(req, res) {
    res.status(200).json({
        message: "Xoa don hang thanh cong"
    })
}

export async function updateOrder(req, res) {
    res.status(200).json({
        message: "Cap nhap don hang thanh cong"
    })
}