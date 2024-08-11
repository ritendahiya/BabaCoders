const express = require('express');

const router = express.Router();

const {mailSender}=require('../middleware/mail.js')
router.post("/maillink",mailSender)



module.exports = router;
