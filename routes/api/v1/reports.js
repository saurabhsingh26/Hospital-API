const express = require('express');
const router = express.Router();

const reportController = require('../../../controllers/api/v1/reports_api');
router.get('/:status',reportController.reportByStatus);

module.exports = router;