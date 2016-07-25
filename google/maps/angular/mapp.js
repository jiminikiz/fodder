angular.module('Mapp', [])
    .controller('MappController', function(){
        console.info('MappController Loaded')
        this.title = "Trivial Angular Example"

        window.mappCtrl = this;
    })

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}
