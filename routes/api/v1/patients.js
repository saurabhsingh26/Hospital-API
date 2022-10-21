const express = require('express');
const router = express.Router();
const passport = require('passport')
const {verifyToken} = require('../../../config/middleware');

const patientController = require('../../../controllers/api/v1/patients_api');
const reportController = require('../../../controllers/api/v1/reports_api');

router.post('/register', verifyToken ,patientController.register);
// router.post('/login',patientController.login);
router.post('/:id/create_report',verifyToken, reportController.createReport);
router.get('/:id/all_reports',reportController.allReports);

module.exports = router;