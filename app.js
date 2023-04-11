const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT;


app.listen(port, () => {console.log(`App is running on port ${port}`)});