const db = require("../models");
const Inventory = db.inventories;
const Op = db.Sequelize.Op;  

exports.create = (req, res) => {
  if (!req.body.amount) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const inventory = {
    car_id: req.body.car_id,
    amount: req.body.amount,
    in_out: req.body.in_out,
    inout_date: req.body.inout_date
  };

  Inventory.create(inventory)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Inventory."
      });
    });
};
exports.findAll = (req, res) => {

  Inventory.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cars."
      });
    });
};
exports.findOne = (req, res) => {
    const id = req.params.id;
    Inventory.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Inventory with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Inventory with id=" + id
        });
      });  
};

exports.update = (req, res) => {
    const id = req.params.id;
    Inventory.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Inventory was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Inventory with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Inventory.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Inventory was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Inventory with id=${id}. Maybe Inventory was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Inventory with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Inventory.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Car were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all cars."
          });
        });
};