//require express
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//get index route
app.get('/', (req, res) =>{
//   res.sendFile(__dirname + '/index.html');
    res.send("live ...")
})



//app listener
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})