const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactDOMFactories = require('react-dom-factories');

const express = require('express');
const app = express();

const DOM = ReactDOMFactories;
const body = DOM.body;
const div = DOM.div;
const script = DOM.script;

const browserify = require('browserify');
const babelify = require("babelify");

require('babel/register');

const TodoBox = require('./views/index.jsx');


app.set('port', (process.argv[2] || 3000));
// app.set('view engine', 'jsx');
// app.set('views', __dirname + '/views');
// app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
	ignore: false
});

const data = [{
	title: 'Shopping',
	detail: process.argv[3]
}, {
	title: 'Hair cut',
	detail: process.argv[4]
}]

app.use('/bundle.js', function (req, res, next) {
	res.setHeader('Content-Type', 'application/javascript');
	
	browserify("./app.js")
		.transform("babelify")
		.bundle()
		.on('error', (error) => {
			console.error(error.message);
			next({ status: 500 });
		})
		.pipe(res);
});

app.use('/', function (req, res) {
	var initialData = JSON.stringify(data);
	var markup = ReactDOMServer.renderToString(React.createElement(TodoBox, { data }));

	res.setHeader('Content-Type', 'text/html');

	var html = ReactDOMServer.renderToStaticMarkup(body(null,
		div({ id: 'app', dangerouslySetInnerHTML: { __html: markup } }),
		script({
			id: 'initial-data',
			type: 'text/plain',
			'data-json': initialData
		}),
		script({ src: '/bundle.js' })
	));

	res.end(html);
});

app.listen(app.get('port'), function () {
	console.log('Express server is up on port 3000');
});