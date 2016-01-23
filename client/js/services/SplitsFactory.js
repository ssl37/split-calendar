
// client/js/services/SplitFactory.js
angular.module('SplitsFactory', []).factory('SplitsFactory', ['$http', function($http) {

    return {
        // call to get all Splits
        get : function() {
            return $http.get('/api/splits').then(
                function(response){ return response.data; },
                function(){ console.log("Blast, no splits"); return;}
            );
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new split
        create : function(wk,nite,id) {
            return $http.post("/api/splits/"+nite+wk+"/"+id, null);
        },

        // call to DELETE a split
        delete : function(wk,nite,id) {
            return $http.delete('/api/splits/'+nite+wk+"/"+id);
        }
    }       

}]);
