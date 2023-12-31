const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const ModifierGroup = require("./modifierGroup");

const Modifier = sequelize.define("Modifier", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceDiff: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

ModifierGroup.hasMany(Modifier);
Modifier.belongsTo(ModifierGroup);

module.exports = Modifier;
