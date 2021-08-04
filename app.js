const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();
const http = require('http');

let json = '';

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json())

app.post('/opix_post', (req, res) => {
	console.log("post req");
	json = req.body;
	console.log(json);
	res.end();
});

app.put('/opix_put/:val', (req, res) => {
	console.log("put req");
	json = req.body;
	console.log(json);
	res.end();
});

app.get('/opix_get',function(req, res){
	console.log("get req");
	res.write(JSON.stringify({"response": json}));
	res.end();
});

app.listen(PORT, function(){
   console.log("Listening on port " + PORT);
});
