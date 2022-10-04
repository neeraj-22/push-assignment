//User routes -- through which frontend will interact with backend

const express = require("express");
const { getDataTest, fetchData, addDataToDB, totalRows } = require("../controllers/userController.js");

const router = express.Router();

//Reads Data from DB
router.get('/fetch-data', fetchData) 

//Returns Table Length
router.get('/data-count', totalRows)

//Inserts Data to DB
router.post('/add-data', addDataToDB)

module.exports = router
