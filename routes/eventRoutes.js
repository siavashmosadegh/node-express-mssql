'use strict';

const express = require('express');
const eventController = require('../controllers/eventController');
const router = express.Router();

const {
    getEvents,
    getEvent,
    addEvent
} = eventController;

router.get('/events', getEvents);
router.get('/event/:id', getEvent);
router.post('/event', addEvent);

module.exports = {
    routes: router
}