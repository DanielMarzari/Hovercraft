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

//add the router
app.use('/', router);
app.listen(PORT, function(){
	console.log("Listening on port " + PORT);
});