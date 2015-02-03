(function bottomNav() {
  $(function() {
    var total = $('.bottom-nav li').length
    if(total > 5) {
      var width = 100/total
      $('.bottom-nav li').css('width', width+'%');
      console.log('width: ', width+'%');
    }
  })
})();