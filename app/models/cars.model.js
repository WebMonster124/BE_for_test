module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
      price:{
        type:Sequelize.STRING
      },
      sku: {
        type: Sequelize.STRING
      },
      car_model: {
        type: Sequelize.STRING
      },
      car_name: {
        type: Sequelize.STRING
      },
      amount:{
        type:Sequelize.INTEGER
      }
      
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Car;
  };