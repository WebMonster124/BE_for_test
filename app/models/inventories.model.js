module.exports = (sequelize, Sequelize) => {
    const Inventory = sequelize.define("inventory", {
      car_id: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      in_out: {
        type: Sequelize.INTEGER
      },
      inout_date:{
        type:Sequelize.DATE
      }
    },
    {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Inventory;
  };