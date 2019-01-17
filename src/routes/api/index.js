module.exports = (express) => {
    const router = express.Router();

    router.get('/events', (req, res) => {
        const mockEvents = require('../../ctrls/mockEvents');
        res.json(mockEvents);
    });

    return router;
};