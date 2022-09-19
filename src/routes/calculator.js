let express = require('express');
let router = express.Router();

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && !isNaN(parseFloat(str))
}

//Params properties on the request object 
router.get('/calculator/', (req, res) => {
    res.status(400).json({ message: `Invalid request` });
});

//Query params properties on the request object 
router.get('/calculator/addition', (req, res) => {
    if(!req.query.num1) {
        res.status(400).json({ message: `num1 is required in QueryString` });
    } else if(!req.query.num2) {
        res.status(400).json({ message: `num2 is required in QueryString` });
    } else {
        res.status(200).json({ result: `${req.query.num1 + req.query.num2}` });
    }
});

//Query params properties on the request object 
router.get('/calculator/subtraction', (req, res) => {
    if(!req.query.num1) {
        res.status(400).json({ message: `num1 is required in QueryString` });
    } else if(!req.query.num2) {
        res.status(400).json({ message: `num2 is required in QueryString` });
    } else {
        if(!isNumeric(req.query.num1 )) {
            res.status(400).json({ message: `num1 is not numeric value` });
        } else if (!isNumeric(req.query.num2 )) {
            res.status(400).json({ message: `num2 is not numeric value` });
        }
        res.status(200).json({ result: `${req.query.num1 - req.query.num2}` });
    }
});

//Query params properties on the request object 
router.get('/calculator/multiplication', (req, res) => {
    if(!req.query.num1) {
        res.status(400).json({ message: `num1 is required in QueryString` });
    } else if(!req.query.num2) {
        res.status(400).json({ message: `num2 is required in QueryString` });
    } else {
        if(!isNumeric(req.query.num1 )) {
            res.status(400).json({ message: `num1 is not numeric value` });
        } else if (!isNumeric(req.query.num2 )) {
            res.status(400).json({ message: `num2 is not numeric value` });
        }
        res.status(200).json({ result: `${req.query.num1 * req.query.num2}` });
    }
});

//Query params properties on the request object 
router.get('/calculator/division', (req, res) => {
    if(!req.query.num1) {
        res.status(400).json({ message: `num1 is required in QueryString` });
    } else if(!req.query.num2) {
        res.status(400).json({ message: `num2 is required in QueryString` });
    } else {
        if(!isNumeric(req.query.num1 )) {
            res.status(400).json({ message: `num1 is not numeric value` });
        } else if (!isNumeric(req.query.num2 )) {
            res.status(400).json({ message: `num2 is not numeric value` });
        }
        res.status(200).json({ result: `${req.query.num1 / req.query.num2}` });
    }
});

//Query params properties on the request object 
router.post('/calculator/addition2', (req, res) => {
    res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
});


module.exports = router