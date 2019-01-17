const twilio = require('twilio');

module.exports = (express) => {
    const router = express.Router();

    router.get('/:to_number', (req, res) => {

        const accountSid = process.env.TWILIO_ACCOUNT_SID; 
        const authToken = process.env.TWILIO_AUTH_TOKEN; 
        const client = twilio(accountSid, authToken); 
        
        const body = `Hi Sean, You've triggered the Twilio API to send an SMS to ${req.params.to_number}. Cheers!`
        const debugMsg = `SMS Sent to ${req.params.to_number}: ${body}`;

        // Dev safe guard, send to self to monitor usage.
        client.messages 
            .create({  
                from: process.env.TWILIO_FROM_NUMBER,       
                to: process.env.TWILIO_OWNER_NUMBER,
                body: body
            }) 
            .then(message => console.log(`${message.sid} - ${debugMsg}`)) 
            .done();

        client.messages 
            .create({  
                from: process.env.TWILIO_FROM_NUMBER,       
                to: `+1${req.params.to_number}`,
                body: body
            }) 
            .then(message => console.log(`${message.sid} - ${debugMsg}`)) 
            .done(() => {
                res.status(200).json({msg:debugMsg});        
            });
    });

    return router;
};