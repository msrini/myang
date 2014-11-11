/**
 * Created by srinivasanm
 */
(function() {
    "use strict";
    angular.module("ipapp")
        .controller("oppController",["$stateParams", "$scope","loadServices", oppController]);
    function oppController($stateParams, $scope, loadServices) {
        var vm = this;
        vm.opps = {"test":"none"};
        loadServices.opps(function(d) {
            vm.opps = d;
        });

        vm.oppid = $stateParams.id;
        vm.client = $stateParams.client;
    }
}());