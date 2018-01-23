const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const app           = express();
const router        = express.Router();
const port = process.env.PORT || 3000
//middleware
app.use(express.static('public'));
app.use(bodyParser.json());

const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri);

app.listen(port)
