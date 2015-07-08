// This dynamically sizes bottom navigation if <li> length is greater than 5

(function bottomNav() {
  $(function() {
    var total = $('.bottom-nav li').length
    if(total > 5) {
      var width = 100/total
      $('.bottom-nav li').css('width', width+'%');
    }
  })
})();