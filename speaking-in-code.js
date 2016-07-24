// if (fireplace.ash > fireplace.wood) {
//     fireplace.extinguish();
// }

// var area = Math.PI * r * r;

// if(direction === 'left' || direction === 'right'){
//   move.x *= -1;
// } else {
//   move.y *= -1;
// }


// $scope.clickHandler = function(){
//     $scope.greeting = ‘Hello World’;
// }

// angular
//     .module(‘superApp’, [‘ngResource’, ‘ngRoute’])
//     .controller(‘superController’, [
//         ‘$scope’,
//         ‘$resource’,
//         function($scope, $resource){}
//     ]);
//









(function(){
    angular.module('superApp',['ngRoute'])
        .config(routerConfig)

    routerConfig.$inject = ['$routerProvider']

    function routerConfig($routerProvider){
        $routerProvider.when('/superRoot',{
            templateUrl: 'partials/test.html',
            controller: 'testController as testCtrl'
        })
    }
})();
