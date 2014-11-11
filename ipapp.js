/**
 * Created by srinivasanm
 */
var app = angular.module('ipapp', ["ui.router"])
    .controller("MainCtrl",function($scope) {
        $scope.xyz = "Hello";
        $scope.clients = ['abc', 'xyz'];
        $scope.menuItems = ["Home","Clients","Opportunities"];
        $scope.viewname = "myhome";
    })
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                views: {
                    "": {
                        templateUrl: 'app/client/home.html',
                        controller: 'clientController as cc'
                    },
                    "opp1": {
                        templateUrl: 'app/opp/opp.html',
                        controller: 'clientController as cc'
                    }
                }
            })
            .state('opp_id', {
                    url: '/opp/:id',
                    templateUrl: 'app/opp/opp.html',
                    controller: 'oppController as oc'
            })
            .state('opp_client', {
                url: '/client/:client',
                templateUrl : 'app/opp/oppClient.html',
                controller: 'oppController as oc'
            })

    }]);
