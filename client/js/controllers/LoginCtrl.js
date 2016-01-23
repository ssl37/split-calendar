// client/js/controllers/LoginCtrl.js
angular.module('LoginCtrl', []).controller('LoginController', ['$scope', 'UserFactory', 'SplitsCtrl', function($scope, UserFactory, SplitsCtrl) {
    $scope.user = '';
    $scope.username = '';
    $scope.alerts = [];

    $scope.randomAnimal = function(u) {
        if ( u != null ) {
            $scope.alerts.push( {type: 'warning', msg: 'user not empty: '+u} )
            $scope.user = '';
        }
        $scope.user = "HAWK";
    }
    $scope.cancel = function() {
        $scope.username = '';
        $scope.user = '';
        $scope.alerts.split(0,len($scope.alerts));
    }
    $scope.attemptLogin = function(u,n) {
        $scope.user=u; $scope.username=n;
        console.log("User: "+$scope.user+"    Name: "+$scope.username)
        if ( ( $scope.user == 'DOLPHIN' ) && ( $scope.username == 'elGuapo') ) {
            SplitsCtrl.changeTemplate(1);
        }
        $scope.alerts.push( {type: 'error', msg: "Incorrect Credentials"} );
    }
}])
