var angularControllers = angular.module('angularControllers', []);

angularControllers.controller('HomeController', ['$scope', function($scope){
    //$scope.yourName = "Ibrahim";
    $scope.setActive('home');
    $scope.clock = {
        now: new Date()
    };
    setInterval(function(){
        $scope.$apply(function(){
            $scope.clock.now = new Date();
        })
    }, 1000)
}]);

angularControllers.controller('AboutController', ['$scope', function($scope){
    //$scope.yourName = "Ibrahim";
    $scope.setActive('about');
    $scope.clock = {
        now: new Date()
    };
    setInterval(function(){
        $scope.$apply(function(){
            $scope.clock.now = new Date();
        })
    }, 1000)
}]);

angularControllers.controller('ContactController', ['$scope', function($scope){
    //$scope.yourName = "Ibrahim";
    $scope.setActive('contact');
    $scope.clock = {
        now: new Date()
    };
    setInterval(function(){
        $scope.$apply(function(){
            $scope.clock.now = new Date();
        })
    }, 1000)
}]);