'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {
    getEvents,
    getEvent
} = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEvent)

module.exports = {
    routes: router
}