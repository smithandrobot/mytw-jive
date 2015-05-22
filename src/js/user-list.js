(function userList() {
  $(function() {
    $el = $('.group-details');
    $list = $el.find('li');
    $label = $('.group-details__user-label svg');

    getUsers();

    function onMouseOver(e) {
      var $authorEl = $(e.currentTarget);
      var position = $authorEl.find('img').position();
      var x = (position.left-136+24)-10;
      var y = position.top-60;
      $label.find('text').text($authorEl.attr('data-mytw-author'));
      $label.css({display: 'block', top: y+'px', left: x+'px'});
    }

    function onMouseOut(e) {
      $label.css({display:'none'});
    }

    function getUsers() {
      var endPoint = 'https://thoughtworks.jiveon.com/api/core/v3/members/places/'+placeID;
      if($el.length > 0) {
        $.ajax(endPoint)
         .fail(onData)
      }
    }

    function onData(d) {
      if(d.status === 200) {
        var json = d.responseText.replace('throw \'allowIllegalResourceCall is false.\';', '');
        var userData = JSON.parse(json);
        $('.group-details__users ul').empty();
        $.each(userData.list, function(index, user) {
          if(user.state === 'owner') {
            if(user.person.displayName !== 'David Ford') {
              var $userEl = $(template(user));
              $userEl.on('mouseover', onMouseOver);
              $userEl.on('mouseout', onMouseOut);
              $('.group-details__users ul').append($userEl);
            }
          }
        })
      }else{
        console.log('Error getting group user data. Response code: ', d.status, d)
      }
    }

    function template(data) {
      return '<li data-mytw-author="'+data.person.displayName+'">'+
             '  <a target="_parent" href="'+data.person.resources.html.ref+'">'+
             '    <img src="'+data.person.resources.avatar.ref+'" alt="'+data.person.displayName+'">'+
             '  </a>'+
             '</li>';
    }
  })
})();