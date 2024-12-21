
import db from "../models";

export async function getServices(req, res) {
  const services = await db.DichVu.findAll(); 
  return res.status(200).json({
    message: "Lấy danh sách dịch vụ thành công",
    data: services,
  });
}

export async function getServiceById(req, res) {
  const { id } = req.params;
  const service = await db.DichVu.findByPk(id); 

  if (!service) {
    return res.status(404).json({
      message: "Không tìm thấy dịch vụ",
    });
  }

  return res.status(200).json({
    message: "Lấy thông tin dịch vụ thành công",
    data: service,
  });
}

export async function insertService(req, res) {
<<<<<<< HEAD
  const service = await db.DichVu.create(req.body);

  return res.status(201).json({
    message: "Thêm dịch vụ thành công",
    data: service,
  });
=======
    const service = await db.DichVu.create(req.body)
    return res.status(201).json({
        message: "Them dich vu thanh cong",
        data: service
    })
       
>>>>>>> 56f13e03e74e1dbf1499e7eb0d11de59014a69f2
}

export async function deleateService(req, res) {
  const serviceID = req.params.id;
  const deleted = await db.DichVu.destroy({
    where: { serviceID },
  });

  if (deleted) {
    return res.status(200).json({
      message: "Xóa dịch vụ thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy dịch vụ cần xóa",
    });
  }
}

export async function updateService(req, res) {
  const serviceID = req.params.id;
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }
  const updated = await db.DichVu.update(req.body, {
    where: { serviceID },
  });

  if (updated[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật dịch vụ thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy dịch vụ cần cập nhật",
    });
  }
}
