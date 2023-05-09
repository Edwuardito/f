const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe',{
    id:{
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING
    },
    resume:{
      type:DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING,
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false, 
  });
};
