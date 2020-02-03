const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const pkg = require('./package')
const data = require('./data');
const winston = require('winston');
const PORT = 8006;

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {'timestamp': true});

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {layout: false, data: data});
});

app.listen(PORT, () => {
    winston.info(`${pkg.name} started on port ${PORT}`);
});
