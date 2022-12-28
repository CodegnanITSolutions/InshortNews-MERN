// import express from 'express';
// import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const express = require('express');
// import Connection from './database/db.js';
// import DefaultData from './default.js';
// import Route from './routes/route.js';
const Route = require('./routes/route.js');
// import cors from 'cors';
const cors = require('cors');
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
// import path from 'path';
const path = require('path');

const app = express();
dotenv.config();

app.use(cors());
app.use('/',Route);

const PORT = process.env.PORT || 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// if(process.env.NODE_ENV === 'production')
// {
//      app.use(express.static("client/build"));
// }
// else
// {
// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });
// }

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});





app.listen(PORT,()=>{

     console.log(`Server Started SuccessFully on PORT ${PORT}`);
  
});

