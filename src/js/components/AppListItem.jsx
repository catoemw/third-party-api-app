var React = require('react');

var AppDetails = require('./AppDetails.jsx');

var AppListItem = React.createClass({

	getInitialState: function () {
		return {
			detailsVisible: false
		};
	},

	render: function () {
		var details;

		if (this.state.detailsVisible) {
			details = 
				<AppDetails 
					maker={this.props.maker}
					title={this.props.title} 
				/>
		}

		return (
			<div onClick={this.handleDetailsClick}>
				<img src={this.props.image} />
				{details}
			</div>
		);
	},

	handleDetailsClick: function () {
		this.setState({
			detailsVisible: !this.state.detailsVisible
		});
	}

});

module.exports = AppListItem;