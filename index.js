const express = require("express");
const cors = require("cors");
const app = express();
var tutorials = require('./app/routes/tutorials');
var cars = require('./app/routes/car');
var inventories = require('./app/routes/inventory');
const db = require("./app/models");
var corsOptions = {
  //origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(()=>{
    console.log('sync')
})

app.use('/api/tutorials', tutorials);
app.use('/api/cars', cars);
app.use('/api/inventories', inventories);
// set port, listen for requests
const PORT = process.env.PORT || 8081;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});