'use strict'
const express = require('express');
const mailController = require('../controller/mailController');
const router = express.Router();

const {mailer} = mailController

router.post('/mail', mailer)

module.exports = {
    routes: router
}