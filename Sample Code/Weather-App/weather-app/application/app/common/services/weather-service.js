var app = angular.module('common.services');
    app.service('WeatherService', ['$http','$q', function($http,$q) {

        var weatherMap = this;
        weatherMap.getWeatherByLocation = function(location) {
            var city = location||'new york';
            var url = `https://weatherapp-174405.appspot.com/weather?city=${city}`;
            return $http.get('json/weather.json');
            //return $http.get('https://weatherapp-174405.appspot.com/weather');
        };

        return {
            getWeatherByLocation: weatherMap.getWeatherByLocation
        }
}]);