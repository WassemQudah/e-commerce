import express from "express";

const port = 3000;
const app = express();



/*
HTTPS Request: 
Types : POST | PATCH | DELETE | GET | OPTIONAL | GET
RESPONSE : JSON 
REST API
*/
app.get('/', (req, res) => {
    res.status(200).json({
        message : 'Successfully CRAETE'
    })
  });
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });