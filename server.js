const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const requestIp = require('request-ip');
const net = require('net');



const PORT = 3000;
const api = require('./routing/api');
const users = require('./routing/users');
const pages = require('./routing/pages');
const payments = require('./routing/payments');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
// app.use(requestIp.mw({ attributeName : 'myCustomAttributeName' }));
//
// app.use(function(req, res) {
//   const ip = req.myCustomAttributeName;
//   console.log(ip);
//   let ipType = net.isIP(ip);
//   console.log('Hello, your ip address is ' + ip + ' and is of type IPv' + ipType + '\n');
// });

app.use('/payments', payments);
app.use('/api', api);
app.use('/users', users);
app.use('/pages', pages);
app.get('/', function(req, res){
});


app.listen(PORT, function(){
  console.log("run:" + PORT)
});


