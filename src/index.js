const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    return res.render('Okay');
});

require('./app/controllers/index.js')(app);

app.listen(3000);


