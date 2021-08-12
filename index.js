const express = require('express');
const axios = require('axios');

const app = express();
PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_, res) => {
  res.send('how are you !Hola')
})

app.listen(PORT, () => console.log(`Server Ready on ${PORT}`))