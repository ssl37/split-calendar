// client/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'html/home.html',
            controller: 'MainController'
        })

        // splits page that will use the SplitsController
        .when('/splits', {
            templateUrl: 'html/splits.html',
            controller: 'SplitsController'
        });

    $locationProvider.html5Mode(true);

}]);
