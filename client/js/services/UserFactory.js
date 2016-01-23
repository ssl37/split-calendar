// client/js/services/UserFactory.js
angular.module('UserFactory', []).factory('UserFactory', ['$http', function($http) {

    return {
        // call to get your user
        get : function(id) {
            return $http.get('/api/users/'+id);
        },
        list : function() {
            return $http.get('/api/users');
        },
        create : function(userData) {
            return $http.post('/api/users', userData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/users/'+id);
        }
    }       

}]);
