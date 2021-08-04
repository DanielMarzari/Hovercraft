const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();
const http = require('http');
var sql = '';
var args = [];
var json = '';
//{0} replace function
String.prototype.format = function() {
    var args = arguments[0];
    return this.replace(/{(\d+)}/g, (match, p1) => {
        var i = parseInt(p1);
        return typeof args[i] != 'undefined' ? args[i] : match;
    });
}

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/Hovercraft.html'));
});

router.get('/opix_get',function(req, res){
  res.send({"res" :  "You are trying to access data"});
});

router.get('/opix_push',function(req, res){
   json = '';
   //get packet
   req.on('data', chunk => {
      json += chunk.toString(); // convert Buffer to string
   });
   req.on('end', () => {
       res.write(JSON.stringify({"response": json}));
	res.end();
   });
});

//add the router
app.use('/', router);
app.listen(PORT, function(){
   console.log("Listening on port " + PORT);
});
