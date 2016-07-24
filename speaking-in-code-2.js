// for(var i=100; i>0; i--) {
//     console.log(i);
// }

// company.employees[57].salary += 5000;

// if(students.length === 10) {
//   groups = [
//     students.splice(0, 5),
//     students.splice(0, 5)
//   ];
// }

// angular.module(‘funkyTown’)
//     .controller(‘funkyTroller’, [‘$scope’, function($scope){}]);


// $scope.clickHandler = function(event){
//     $scope.markers.push({
//         x : event.pageX,
//         y: event.pageY
//     });
// }











(function(){
    angular.module('monkeyMan',['ngRoute'])
        .config(routerConfiguration)

    routerConfiguration.$inject = ['$routerProvider']

    function routerConfiguration($routerProvider){
        $routerProvider.when('/gorillaMan',{
            templateUrl: 'html/primeApe.html',
            controller: 'apeController as ape'
        })
    }
})();




