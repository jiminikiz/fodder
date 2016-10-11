angular.module('angular.playground', [])
    .controller('PlaygroundController', playgroundController);

playgroundController.$inject = ["$scope","$http"]

function playgroundController($scope, $http) {
    // this.people = [
    //     { name: 'Casey' },
    //     { name: 'Andrew' },
    //     { name: 'Brandon' },
    //     { name: 'Dude Man Bro' }
    // ]

    // this.zipcode = 80021;
    // this.city = 'Westminster';

    // this.toggle = true;
    // this.placeholder = 'Student'
    // this.profileFormShow = false;

    // this.onToggle = () => {
    //     console.log('fired change!')
    //     this.placeholder = (this.toggle) ? 'Student':'Instructor'
    // }

    // function debug(res) {
    //     console.debug(res.data);
    // }
    // function error(err) {
    //     console.error(err);
    // }
    // $http({
    //     method: 'JSONP',
    //     url: 'http://api.musixmatch.com/ws/1.1/track.search',
    //     params: {
    //         q_lyrics : 'back',
    //         format   : 'jsonp',
    //         apikey   : '5a58ebcbcfbfc055f5f550c891768ac6',
    //         callback : 'JSON_CALLBACK'
    //     }
    // }).then(debug, error);

    // $http.get('http://pokeapi.co/api/v2/pokemon/1')
    // $http.get('http://food2fork.com/api/search?key=b7eda6243489cc36ac8e5a943f0bd24f&q=vegan')
    // window.playground = this;
}
