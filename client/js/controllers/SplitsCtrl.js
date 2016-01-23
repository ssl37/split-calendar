
// client/js/controllers/SplitCtrl.js
angular.module('SplitsCtrl', []).controller('SplitsController', ['$scope', 'SplitsFactory', function($scope, SplitsFactory) {
    $scope.templates=[
        {url: "../html/login.html"},
        {url: "../html/home.html"},
        {url: "../html/error.html"}
    ];
    $scope.template = $scope.templates[0];
    $scope.tagline = "Monthly Splits";

    $scope.getSplits = function(){
        SplitsFactory.get().then(
            function(data){ $scope.splits = data }
        );
    };
    $scope.getSplits();
    
    $scope.changeTemplate = function(tnum) {
        if ( tnum > len($scope.templates)-1)
            tnum = len($scope.templates)-1;
        $scope.template = $scope.templates[tnum];
    }
    
    $scope.dayOfWeek = function(split){
	   return [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ].indexOf(split.night);
    };

}]);
