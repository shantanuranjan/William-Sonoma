'use strict';

angular.module('weatherApp.directives', [])
    .directive('weatherPanel',function() {
        return {
            restrict: 'EA',

            scope: {
                list: '=list',
                forecast: '=forecast'
            },

            templateUrl: 'app/view/weather-panel.html',

            link: function(scope, element, attrs) {

                scope.getIconImageUrl = function(icon) {
                    return (icon ? 'http://openweathermap.org/img/w/' + icon + '.png' : '');
                };

                scope.parseDate = function (time) {
                    return new Date(time * 1000);
                };
            }
        }
    });

