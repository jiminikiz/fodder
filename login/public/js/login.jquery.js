$(function(){
    $('#loginForm').on('submit', function(e){
        e.preventDefault()

        $.ajax({
            url: '/login',
            method: 'POST',
            data: $('#loginForm').serialize(),
            beforedSend: login.loading,
            error: login.error,
            success: login.success
        })
    })

    var login = {
        success: function() {
            location.href="/dashboard" // front-end redirect
        },
        error: function() {
            console.error('Could not login!')
        },
        loading: function() {
            console.info('Loading...')
        }
    }
})();
