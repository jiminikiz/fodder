angular.module('ngMapp.example', ['ngMaps'])
    .controller('MappController', function(){
        console.info('MappController Loaded')
        this.title = "My awesome Map App (Mapp)"
    })
