var angularApp = angular.module("angularApp", []);

angularApp.controller('FirstController', ['$scope', function($scope){
    $scope.yourName = "Ibrahim";
    $scope.clock = new Date();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.clock = new Date();
        })
    }, 1000)
}]);