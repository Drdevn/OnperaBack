const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const PORT = 3000;
const api = require('./routing/api');
const users = require('./routing/users');
const pages = require('./routing/pages');
const payments = require('./routing/payments');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/payments', payments);
app.use('/api', api);
app.use('/users', users);
app.use('/pages', pages);
app.get('/', function(req, res){
});

app.listen(PORT, function(){
  console.log("run:" + PORT)
});


