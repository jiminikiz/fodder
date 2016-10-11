angular.module('module.spotify', [])
    .controller('controller.spotify', SpotifyController);

SpotifyController.$inject = ["$scope","$http"]

function SpotifyController($scope, $http) {
    console.info('SpotifyController:loaded');
}
