var app = angular.module('common.services');
    app.service('AppronService', ['$http','$q', function($http,$q) {

        var appronMap= this;
        appronMap.getAppronInfo = function() {
            return $http.get('json/appron.json');
        };

        return {
            getAppronInfo: appronMap.getAppronInfo
        }
}]);