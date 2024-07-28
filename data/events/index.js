'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const list = await pool.request().query(sqlQueries.eventslist);
        return list.recordset;
    } catch (error) {
        return error.message
    }
}

const getById = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        console.log(eventId)
        const oneEvent = await pool.request()
                         .input('eventId', sql.Int, eventId)
                         .query(sqlQueries.eventById);
        return oneEvent.recordset
    } catch (error) {
        return error.message;
    }
}

const createEvent = async (eventData) => {
    try {
        let pool = await sql.connect(config.sql)
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                                    .input('customerFirstName', sql.NVarChar(100), eventData.customerFirstName)
                                    .input('customerLastName', sql.NVarChar(100), eventData.customerLastName)
                                    .query(sqlQueries.createEvent);
        return insertEvent.recordset;
    } catch (error) {
        return error.message
    }
}

module.exports = {
    getEvents,
    getById,
    createEvent
}