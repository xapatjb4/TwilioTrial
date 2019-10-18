const dotenv= require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse;



app.get('/', (req, res) => {
  res.send(process.env.TWILIO_SID)
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('hi there');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(80, () => {
  console.log('Example app listening on port 80!')
});