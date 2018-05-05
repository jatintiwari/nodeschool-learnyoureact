const React = require('react');
const ReactDOM = require('react-dom');
const TodoBox = require('./views/index.jsx');

let data = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));
ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));