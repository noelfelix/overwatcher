const express   = require('express');
const app = express();

require('./config/middleware')(app, express);

app.listen(process.env.PORT, null, () => {
  console.log(`You are listening to the sweet, sweet sounds of ${process.env.PORT}`)
});

module.exports = app;
