const express = require("express");
const { createNewBloodPost } = require("../controllers/bloodPost");


const bloodpostRouter = express.Router();

bloodpostRouter.post('/', createNewBloodPost);
//update
//delete


module.exports = bloodpostRouter;