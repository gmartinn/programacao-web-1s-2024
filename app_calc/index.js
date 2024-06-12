const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'src', 'views')));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});