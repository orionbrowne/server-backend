const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    isUrl: true,
    defaultValue: "https://www.usciences.edu/images/homepage-hero/one-university-endless-possibilities-slider-mobile.jpg"
  }

});

module.exports = Campus;
