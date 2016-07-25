function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}

angular.module('Mapp', [])
    .controller('MappController', function(){
        var mappCtrl = this

        mappCtrl.title = "My awesome Map App (Mapp)"
    })
