const sequelize = require('../util/database');
const logger = require('../util/logger');
// const statsd = require('node-statsd');
// const client = new statsd({ host : 'localhost', port : 8125 });

exports.checkHealthz = async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');

    // Increment CloudWatch Metric
    // client.increment('healthz.hit');

    if (req.body && Object.values(req.body).length !== 0) {
        return res.status(400).end();
    }

    if (req.query && Object.keys(req.query).length > 0) {
      res.status(400).send({ message: "Bad Request!" });
    }

    await sequelize.authenticate()
    .then(() => {
        logger.info("logging healthz");
        res.status(200).end();
    })
    .catch(err => {
        res.status(503).end();
    });
};