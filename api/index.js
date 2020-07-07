const express= require('express');
const router = express.Router();
const messages = require('./controllers/messages');
router.use('/messages', messages);


module.exports = router;
