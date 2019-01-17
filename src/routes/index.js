module.exports = (express) => {
    const router = express.Router();

    router.get('/status', (req, res) => {
        res.json({
            healthy: true,
        });
    });

    router.get('/', (req, res) => {
        res.send(`¿Que?`);
    });

    router.use('/sms', require('./sms')(express));
    router.use('/api', require('./api')(express));

    return router;
};