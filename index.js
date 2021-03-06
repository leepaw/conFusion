const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => console.log(`Web App Listening on ${ PORT }`));
