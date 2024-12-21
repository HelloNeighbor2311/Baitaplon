"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("KhachHang", {
      CustomerID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CustomerName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Avatar: {
        type: Sequelize.STRING,
      },
      CustomerAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CustomerAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      PhoneNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      RegisterDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      UpdateDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
<<<<<<< HEAD
    await queryInterface.dropTable("KhachHang");
  },
=======
    await queryInterface.dropTable('KhachHang');
  }
>>>>>>> 56f13e03e74e1dbf1499e7eb0d11de59014a69f2
};
