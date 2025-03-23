const express = require('express');
const router = express.Router();
const home = require('../controllers/ctrl_home');

router.get('/', home.gethome);
    



module.exports = router;