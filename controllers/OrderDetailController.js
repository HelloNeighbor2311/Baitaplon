export async function getOrderDetails(req, res) {
    res.status(200).json({
        message: "Lay ds chi tiet san pham thanh cong"
    })
}

export async function getOrderDetailById(req, res) {
    res.status(200).json({
        message: "Lay thong tin chi tiet san pham thanh cong"
    })
}

export async function insertOrderDetail(req, res) {
    res.status(200).json({
        message: "Them chi tiet san pham thanh cong"
    })
}

export async function deleateOrderDetail(req, res) {
    res.status(200).json({
        message: "Xoa chi tiet san pham thanh cong"
    })
}

export async function updateOrderDetail(req, res) {
    res.status(200).json({
        message: "Cap nhap chi tiet san pham thanh cong"
    })
}