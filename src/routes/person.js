let express = require('express');
let router = express.Router();

//Params properties on the request object 
router.get('/person/:name', (req, res) => {
    res.status(200).json({ message: `You have requested a ${req.params.name}` });
});

//Query params properties on the request object 
router.get('/person/', (req, res) => {
    if(req.query.name) {
        res.status(200).json({ message: `You have requested a ${req.query.name}` });
    } else {
        res.status(200).json({ message: 'You have requested a person' });
    }
});

//example for 500 internal server error
router.get('/error500/', (req, res) => {
    throw new Error('Example for internal server error 500')
});

module.exports = router