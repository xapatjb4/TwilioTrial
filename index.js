const dotenv= require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);


app.get('/', (req, res) => {
  res.send(process.env.TWILIO_SID)
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});