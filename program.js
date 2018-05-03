var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

const data = [{
    title: 'Shopping',
    detail: process.argv[3]
},{
    title: 'Hair cut',
    detail: process.argv[4]
}]

app.use('/', function (req, res) {
    res.render('index', { data });
});

app.listen(app.get('port'), function () {
    console.log('Express server is up on port 3000');
});