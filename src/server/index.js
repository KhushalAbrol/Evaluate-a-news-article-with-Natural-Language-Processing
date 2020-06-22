const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());



console.log("__dirname"+__dirname)
var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


console.log(`Your API key is ${process.env.API_KEY}`);

app.post('/add',sendData)
function sendData(req, res){
  console.log("Here is the URL:"+req.body.URL);
  textapi.sentiment({
    'url' : req.body.URL      
  }, function(error, response) {
      res.send(response)
      console.log(response)
  });
}