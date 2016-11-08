var React = require('react');

var AppList = require('./AppList.jsx');

var App = React.createClass({
	render: function () {
		return (
			<main>
				<AppList />
			</main>
		);
	}
});

module.exports = App;