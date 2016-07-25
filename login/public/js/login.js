(function(){
    angular.module('app.login', [])
        .controller('app.login.controller', Login)

    Login.$inject = ['$http']

    function Login($http) {
        this.message = '&nbsp;'

        this.payload = {
            email: '',
            password: ''
        }

        this.success = (res) => {
            location.href = '/dashboard'
        }

        this.error = (err) => {
            console.error('Could not login! Error:', err)
        }

        this.submit = ($event) => {
            $http.post('/login', this.payload).then(this.success, this.error)
        }
    }
})()
