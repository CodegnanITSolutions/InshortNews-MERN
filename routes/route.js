const express = require('express');
// import express from 'express';

const route = express.Router();

// import NewsFetchControllers from '../controllers/NewsFetch-Controller.js';

const {NewsFetchControllers} = require('../controllers/NewsFetch-Controller.js');
// import getNews from '../controllers/InshortsNewsFetch.js';
const getNews = require('../controllers/InshortsNewsFetch.js');

// route.get('/news',NewsFetchControllers);

route.get('/inshortsNews',getNews);

// export default route;
module.exports = route;