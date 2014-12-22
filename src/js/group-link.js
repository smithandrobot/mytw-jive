(function groupLinks() {
  $(function() {
    if(window.hasOwnProperty('avatarLink')) {
      $('.j-placeHdImg img', window.parent.document).wrap('<a href="'+avatarLink+'"></a>');
    }
  })
})();