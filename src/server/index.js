const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(express.static('dist'))
console.log(__dirname)
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

app.post('/add', sendData)


function sendData(req, res){
textapi.sentiment({
    'url': req.body.text
  }, function(error, response) {
      res.send(response)
      console.log("Hi Khushal"+response)
  });

}

/* textapi.sentiment({
    'text': 'John is a very good football player!'
}, function(error, response) {
    if (error === null) {
        console.log(response);
    }
});
}

var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: ");
      console.log("========================================");
      for (var i = 0; i < data.stories.length; i++) {
        console.log(data.stories[i].title + " / " + data.stories[i].source.name);
      }
    }
  };
  
  api.listStories(opts, callback); */