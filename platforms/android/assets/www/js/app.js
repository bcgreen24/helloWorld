/**
 * Created by bcgreen on 12/21/15.
 */
var app = angular.module('helloWorld', []);

app.controller('helloWorldController', function($scope){
    $scope.message = 'Fuck you, Charlie.';
});
