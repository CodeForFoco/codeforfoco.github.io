(function() {
    'use strict';

    var form = document.getElementById('slack');
    var email = document.getElementById('slack-email');
    form.addEventListener('submit', function(evt) {
        if (!email.value) {
            evt.preventDefault();
        }
    });
}());
