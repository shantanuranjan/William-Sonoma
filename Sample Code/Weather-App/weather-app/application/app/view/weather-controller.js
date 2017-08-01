(function(){
    "use strict";
    angular.module('weatherApp')
           .controller('WeatherCtrl',['$scope','WeatherService','defaultLocations', '$state','GApi',
                function($scope, WeatherService, defaultLocations, $state, GApi) {
               GApi.execute('weatherapp-174405', 'v1').then(function(resp) {
                   $scope.value = resp;
               }, function() {
                   console.log('error :(');
               });


                $scope.message = '';
                $scope.hasState = '';
                $scope.defaultLocations = defaultLocations;
            	$scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

            	WeatherService.getWeatherByLocation(defaultLocations[ 0 ]).then(function(res) {
                    $scope.forecast = res.data;
                });


            	$scope.getWeatherByLocation = function() {

                    if ($scope.location == '' || $scope.location == undefined) {
                        $scope.hasState = 'has-warning';
                        $scope.message = 'Please provide a location';
                        return;
                    }

                    $scope.hasState = 'has-success';

                    WeatherService.getWeatherByLocation($scope.location).then(function(res) {
                        $scope.forecast = res.data;
                    });
                };

                $scope.setLocation = function(loc) {
                    $scope.location = loc;
                    $scope.getWeatherByLocation();
                };

            	$scope.getIconImageUrl = function(icon) {
                    return (icon ? $scope.iconBaseUrl + icon + '.png' : '');
                };

                $scope.parseDate = function (time) {
                    return new Date(time * 1000);
                };
        }]);
})();