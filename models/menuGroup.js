const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MenuGroup = sequelize.define("MenuGroup", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = MenuGroup;
