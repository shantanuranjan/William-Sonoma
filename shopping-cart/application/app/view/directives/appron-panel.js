'use strict';

var app = angular.module('appronApp.directives');
app.directive('appronPanel',function() {
	return {
		restrict: 'EA',

		scope: {
			src: '=src',
			onmouseover: '&onmouseover'
		},

		templateUrl: 'app/view/directives/appron-panel.html',

		link: function(scope, element, attrs) {
		}
	}
});

