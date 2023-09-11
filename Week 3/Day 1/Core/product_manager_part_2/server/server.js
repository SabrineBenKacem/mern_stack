const express = require("express");
const app = express();
const cors = require('cors')

// GLOBAL VARIABLES
const PORT = 8000;
const DB = "product_db";


app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./config/mongoose.config')(DB)
require('./routes/products.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))