const express = require('express');
const router = express.Router();

const healthzController = require('../controllers/health');

router.get('/healthz', healthzController.checkHealthz);

module.exports = router;