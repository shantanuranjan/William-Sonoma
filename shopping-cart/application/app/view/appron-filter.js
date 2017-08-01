'use strict';

/* Filters */

angular.module('appronApp.filters', [])
    .filter('placeholder', [function() {
        return function (input,phvalue) {
            return (angular.isUndefined(input) || input == '') ? phvalue : input;
        };
    }]);