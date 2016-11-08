var React = require('react');

var AppDetails = React.createClass({
	
	render: function () {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<h4>{this.props.maker}</h4>
			</div>
		)
	}

});

module.exports = AppDetails;