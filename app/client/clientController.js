/**
 * Created by srinivasanm
 */
(function () {
    "use strict";
    angular.module("ipapp")
        .controller("clientController",["dateService","$state", "$rootScope", "loadServices", cController]);
    function cController(dateService, $state, $rootScope, loadServices) {
        var vm = this;
        vm.viewname = "myhome";
        //Define Model. This is only for demo that the model is hard-coded here.
        //In practice, the data will come from a database, abstracted thru a REST service over an API
        loadServices.clients(function(d) {
            //add code to process the data which is the parameter, d
            vm.clientDetails = d;
        });


        //implement methods
        //date service is defined in another file where diff is the name of the service exposed
        //parameters to diff are sent from view
        vm.whenCreated = dateService.diff;
        vm.isPositive = function(num) {
            if (num > 0) return true;
            return false;
        }
        /*Show the Opportunity corresponding to a Client*/
        vm.showOpp = function(client) {
            //$scope.clientDetail = vm.clientDetails[client];
            $rootScope.cDetail = vm.clientDetails[client];
            $state.transitionTo("opp_client", {client:client});
        }

        vm.saveNotes = function(client,details) {
            console.log("From edit notes  = " + JSON.stringify(details));
            //save this stuff
            vm.clientDetails[client] = details;
            //reset the $edit indicator
            details.$edit = false;
        }
    }
})();