/*
a service to fetch clients data from a local file. Demonstrates use of async method
*/
(function() {
    var trackapp = angular.module("ipapp");
    trackapp.service("loadServices", ["$http", function($http) {
        this.clients = function(fn) {
            $http({
                method: 'GET',
                url: 'app/data/clients.txt'
            }).success(function(data){
                fn(data);
            }).error(function(err){
                console.log("error:" + err);
            });
        }
        this.opps = function(fn) {
            $http({
                method: 'GET',
                url: 'app/data/leads.txt'
            }).success(function(data){
                fn(data);
            }).error(function(err){
                console.log("ERROR:" + err);
            });
        }
    }]);
})();
