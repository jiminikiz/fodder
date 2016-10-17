angular.module('module.autocomplete', [])
    .controller('Autocompleter', [
        '$http',
        '$timeout',
        function($http, $timeout) {
            var AutoCtrl = this;

            AutoCtrl.search = function(searchTerm) {
                return $http({
                    url: 'https://trackapi.nutritionix.com/v2/search/instant',
                    params: { query: searchTerm },
                    headers: {
                        "x-app-id":  "df6785e4",
                        "x-app-key": "5488c64edf34aa87c02fcb6f419bf491"
                    }
                });
            };

            AutoCtrl.searchTerm;

            AutoCtrl.doSearch = function() {
                console.debug(AutoCtrl.searchTerm);

                if( AutoCtrl.searchPromise ) {
                    $timeout.cancel( AutoCtrl.searchPromise );
                }
                AutoCtrl.searchPromise = $timeout(function() {
                    AutoCtrl.search(AutoCtrl.searchTerm)
                        .then(AutoCtrl.success, AutoCtrl.error);
                }, 200);
            };

            AutoCtrl.success = function(res) {
                AutoCtrl.searchData = res.data;
            };

            AutoCtrl.error = function(error) {
                console.error('Autocomplete error', error);
            };
        }]);
