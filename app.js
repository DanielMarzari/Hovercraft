const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();
const http = require('http');

var json = '';

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

app.post('/opix_post', (req, res) => {
  console.log(req.body);
  json = req.body;
  res.end()
})

app.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/Hovercraft.html'));
});

app.get('/opix_get',function(req, res){
  res.write(JSON.stringify({"response": json}));
  res.end()
});

app.listen(PORT, function(){
   console.log("Listening on port " + PORT);
});
