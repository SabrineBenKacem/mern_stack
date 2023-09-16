const express = require("express");
const cors = require('cors')
const app = express();

// GLOBAL VARIABLES
const PORT = 8001;
const DB = "beltReview_db";


app.use(express.json(), express.urlencoded({ extended: true }), cors());
require('./config/mongoose.config')(DB)
require('./routes/pirates.routes')(app)


app.listen(PORT, () => console.log(`🚀🚀🚀🚀 >>> SERVER IS RUNNING ON PORT ${PORT} <<< 🚀🚀🚀`))