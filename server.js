const env = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const express = require('express');

env.config();

const app = express();

app.use(favicon(`${__dirname}/${process.env.STATIC_DIRECTORY}/favicon.ico`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname));

  app.use(express.static(path.join(__dirname, process.env.STATIC_DIRECTORY)));

  app.get(['/', '/collection/:name', '/concept'], (_, res) => {
    res.sendFile(path.join(__dirname, process.env.STATIC_DIRECTORY, 'index.html'));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Node server is listening on port ${process.env.PORT}`);
});
