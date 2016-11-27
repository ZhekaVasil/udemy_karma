var testingAngularApp = angular.module('testingAngularApp',[]);
testingAngularApp.controller('testingAngularCtrl', testingAngularCtrl);

testingAngularCtrl.$inject = ['$rootScope', '$scope'];

function testingAngularCtrl($rootScope, $scope) {
    $scope.title = 'testin angularjs';

    $scope.destinations = [];

    $scope.newDestination = {
        city : undefined,
        country : undefined
    };

    $scope.addDestination = function () {
        $scope.destinations.push({
            city : $scope.newDestination.city,
            country : $scope.newDestination.country
        })
    };


    $scope.removeDestination = function (index) {
        $scope.destinations.splice(index, 1);
    }
}