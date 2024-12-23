import { Sequelize, where } from "sequelize";
import argon2 from "argon2";
const { Op } = Sequelize;
import db from "../models";
import CustomerResponse from "../DataTransferObjects/responses/Customers/CustomerResponse";

export async function insertCustomer(req, res) {
  const existEmail = await db.KhachHang.findOne({
    where: { email: req.body.Email },
  });
  if (existEmail) {
    return res.status(409).json({
      message: "Email đã tồn tại",
    });
  }
  const hashedPassword = await argon2.hash(req.body.Password);
  const customer = await db.KhachHang.create({
    ...req.body,
    Password: hashedPassword,
  }); // Assuming the model is Customer
  if (customer) {
    return res.status(201).json({
      message: "Thêm mới người dùng thành công",
      data: new CustomerResponse(customer),
    });
  }
}

export async function loginCustomer(req, res) {
  const { Email, Password } = req.body;

  // Kiểm tra nếu thiếu thông tin đăng nhập
  if (!Email || !Password) {
    return res.status(400).json({
      message: "Email và mật khẩu không được để trống",
    });
  }

    // Tìm khách hàng theo email
    const customer = await db.KhachHang.findOne({
      where: { Email },
    });

    // Nếu không tìm thấy người dùng
    if (!customer) {
      return res.status(404).json({
        message: "Email hoặc mật khẩu không chính xác",
      });
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = Password && await argon2.verify(customer.Password, Password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Email hoặc mật khẩu không đúng",
      });
    }

    // // Tạo token JWT nếu cần
    // const token = jwt.sign(
    //   {
    //     id: customer.customerID,
    //     email: customer.email,
    //     name: customer.name,
    //   },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" } // Thời gian sống của token
    // );

    // Trả về thông tin người dùng và token
    return res.status(200).json({
      message: "Đăng nhập thành công",
      data: {
        //token,
        user: {
          id: customer.CustomerID,
          name: customer.CustomerName,
          email: customer.Email,
        },
      },
    });
}


export async function updateCustomer(req, res) {  
  const customerID = req.params.id;

  // Log kiểm tra giá trị req.params
  console.log("req.params:", req.params);
  console.log("customerID:", customerID);

  // Kiểm tra nếu customerID không hợp lệ
  if (!customerID) {
    return res.status(400).json({
      message: "Thiếu CustomerID trong URL",
    });
  }

  // Kiểm tra dữ liệu gửi từ client
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Dữ liệu cập nhật không được để trống",
    });
  }

  // Cập nhật khách hàng
  const updateCustomer = await db.KhachHang.update(req.body, {
    where: { customerID }, // Sửa lại điều kiện nếu cần
  });

  if (updateCustomer[0] > 0) {
    return res.status(200).json({
      message: "Cập nhật khách hàng thành công",
    });
  } else {
    return res.status(404).json({
      message: "Không tìm thấy khách hàng cần cập nhật",
    });
  }
}
