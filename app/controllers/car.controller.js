const db = require("../models");
const Car = db.cars;
const Op = db.Sequelize.Op;  

exports.create = (req, res) => {
  if (!req.body.price || !req.body.sku  || !req.body.car_model || !req.body.car_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const car = {
    price:req.body.price,
    sku: req.body.sku,
    car_model: req.body.car_model,
    car_name: req.body.car_name,
    amount:req.body.amount
  };

  Car.create(car)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Car."
      });
    });
};

exports.findAll = (req, res) => {
    const car_name = req.query.car_name;
    var condition = car_name ? { car_name: { [Op.like]: `%${car_name}%` } } : null;
    Car.findAll({ where: condition })
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
    Car.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Car with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Car with id=" + id
        });
      });  
};

exports.update = (req, res) => {
    const id = req.params.id;
    Car.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Car was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Car with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Car.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Car was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Car with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Car.destroy({
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