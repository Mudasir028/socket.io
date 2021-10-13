const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // these are some ways by which we can read static file from outside the current directory
  // process.cwd() returns the absolute path of your project.
  // res.sendFile( `${process.cwd()}/public/index.html` );

  // read html file from outside the current directory
  // When a request is made to the server, an index.html file is served.
  // res.sendFile(path.join(__dirname, '../../public/index.html'));
  // res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  res.sendFile('index.html');

});

module.exports= router;