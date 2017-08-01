
(function(){
    'use strict';
var app = angular.module("weatherApp",["angular-google-gapi","common.services","ui.router","weatherApp.directives"]);
app.value('defaultLocations',['Hamburg','San Francisco','Berlin','Athens','Tokyo','New York','Moscow']);

app.config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/welcomeView.html"
        })
        .state("forecast", {
            url:"/forecast",
            templateUrl:"app/view/weather-report.html",
            controller: "WeatherCtrl as vm"
        })
    }]);
    app.run(['GApi', 'GAuth',
        function(GApi, GAuth) {
            var BASE = 'https://weatherapp-174405.appspot.com/weather';
            GApi.load('weatherapp-174405', 'v1', BASE).then(function(resp) {
                console.log('api: ' + resp.api + ', version: ' + resp.version + ' loaded');
            }, function(resp) {
                console.log('an error occured during loading api: ' + resp.api + ', resp.version: ' + version);
            }).catch(function(api, version) {
                console.log('an error occured during loading api: ' + api + ', version: ' + version);
            });
        }
    ]);
})();