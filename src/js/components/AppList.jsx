var React = require('react');

var dataStore = require('../stores/dataStore');
var AppListItem = require('./AppListItem.jsx');

var AppList = React.createClass({

	getInitialState: function () {
		return {
			data: dataStore.fetchData()
		};
	},

	componentWillMount: function () {
		var _this = this;
		dataStore.on('update', function () {
			_this.setState({
				data: dataStore.getData()
			});
		});
	},

	render: function () {
		var appListItems = this.state.data.map(function (data) {
			return <AppListItem
				key={data.id}
				title={data.title}
				maker={data.principalOrFirstMaker}
				url={data.links.web}
				image={data.webImage.url}
				/>
		});
		return (
			<section>{appListItems}</section>
		);
	}
});

module.exports = AppList;