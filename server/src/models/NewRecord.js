const { DataTypes, Sequelize } = require('sequelize');

const sequelize = Sequelize;

module.exports = sequelize => {
  sequelize.define(
    'newRecord',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      dateMeal: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      timeMeal: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: true,
        defaultValue: '',
      },
      sleepTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      napTime: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
      },
      timeActivity: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
      },
      coffeeCups: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
      },
      drinks: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
        defaultValue: [],
      },
    },
    { timestamps: false }
  );
};
