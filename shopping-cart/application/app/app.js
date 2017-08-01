
(function(){
    'use strict';
var app = angular.module("appronApp",["common.services","ui.router","appronApp.directives"]);

app.config(["$stateProvider","$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("appron", {
            url:"/appron",
            templateUrl:"app/view/appron-cart.html",
            controller: "AppronCtrl as vm"
        })
    }]);
})();