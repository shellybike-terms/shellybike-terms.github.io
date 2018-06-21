var API_URL = 'https://api.shellybike.net/api/subscribe';

$('#subscribe-button').click(function() {
  $('#subscribe-button').prop('disabled', true);

  $.post(API_URL, { email: $('#subscribe-email').val() })
      .done(function(result) {
        $('#subscribe-button').prop('disabled', false);
        $('#subscribe-result').html('<p style="color: green; padding: 2px;">subscribed successfully.</p>');
      })
      .fail(function(error) {
        console.log(error);
        $('#subscribe-button').prop('disabled', false);
        $('#subscribe-result').html('<p style="color: red; padding: 2px;">' + error.responseJSON.error + '</p>');
      });
});
