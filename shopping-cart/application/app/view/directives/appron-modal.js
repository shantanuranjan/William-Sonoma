'use strict';

var app = angular.module('appronApp.directives');
app.directive('appronModal',function() {
	return {
		restrict: 'EA',

		scope: {
			cart: '=cart'
		},

		templateUrl: 'app/view/directives/appron-modal.html',

		link: function(scope, element, attrs) {
		}
	}
});

