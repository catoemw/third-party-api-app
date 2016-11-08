var EventEmitter = require('eventemitter3');
var $ = require('jquery');

var dataStore = Object.create(EventEmitter.prototype);
EventEmitter.call(dataStore);

var data = [];

dataStore.getData = function () {
	return data;
};

dataStore.fetchData = function () {
	$.ajax ({
		url: 'https://www.rijksmuseum.nl/api/en/collection?key=JCEF3H2n&format=json&f.materials.sort=oil%20paint%20(paint)&toppieces=True',
		success: function (response) {
			var results = response.artObjects;
			data = data.concat(results);
			dataStore.emit('update');
		}
	});

	return data;
}

window.dataStore = dataStore;

module.exports = dataStore;


