(function(){
    angular.module('app.auth', [])
        .controller('app.auth.controller', Auth)

    Auth.$inject = ['$http']

    function Auth($http) {
        console.info("Auth.controller:loaded")

        var auth = this;

        auth.message = ''

        auth.payload = {
            email: '',
            password: ''
        }

        auth.login = {
            success: function(res) {
                console.info('Login:success', res)
                // location.href = '/dashboard'
            },
            error: function(err) {
                console.error('Login.error', err)
            },
            submit: function($event) {
                console.debug('Login.submit', $event)
                $http.post('/login', auth.payload)
                    .then(auth.login.success, auth.login.error)
            }
        }

        auth.register = {
            success: function(res) {
                console.info('Register:success', res)
                // location.href = '/dashboard'
            },
            error: function(err) {
                console.error('Register:error', err)
            },
            submit: function($event) {
                $http.post('/register', auth.payload)
                    .then(auth.register.success, auth.register.error)
            }
        }
    }
})()
