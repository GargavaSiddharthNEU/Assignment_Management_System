require('dotenv').config();
const express = require('express');
const sequelize = require('./util/database');
const healthzRoutes = require('./routes/health');
const assignmentRoutes = require('./routes/assignment');
//const logger = require('./util/logger');

const app = express();

app.use(express.json());

app.use(healthzRoutes);
app.use('/v3',assignmentRoutes);

// Catch-all handler for unsupported methods
app.use((req, res) => {
    console.log("inside 405");
    res.status(405).end();
});

module.exports = app;
