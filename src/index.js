let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let calculatorRoute = require('./routes/calculator')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

//middleware function
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next();
});

app.use(personRoute)
app.use(calculatorRoute)
app.use(express.static('public'))

//handler for error 404 resource not found
app.use((req, res, next) => {
    res.status(404).json({ message: 'Requested resource not found!' });
});

//handler for error 500 internal server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: `${err}` });
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Running on port ${PORT}`))