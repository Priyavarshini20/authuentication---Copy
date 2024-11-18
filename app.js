// import express from 'express'
const express = require('express');
const jobRouter = require('./routes/jobroutes');

//create an express app (application)
const app = express();

// define the route route
app.use('/',jobRouter);

// exports the app
module.exports=app;