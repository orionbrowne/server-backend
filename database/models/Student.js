const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },

  imageUrl: {
    type:Sequelize.STRING,
    allowNull: false,
    isUrl: true,
    defaultValue: "https://i.pinimg.com/474x/db/82/ca/db82ca0637137b1ea787ded9e7485ffd.jpg"
  },

  gpa: {
    type:Sequelize.INTEGER,
    allowNull: false,
    min: 0,
    max: 4.1
  }

});

module.exports = Student;
