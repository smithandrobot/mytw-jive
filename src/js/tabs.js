(function tabs() {
  $(function() {
    var $el = $('.tab');
    var $head = $el.find('.tab__head');
    var $tabs = $head.find('li');
    var $panels = $el.find('.tab__container div');
    var tabWidth = 100 / $tabs.length;
    //select tab & show its content
    $panels.hide();
    $($panels[0]).show();

    // init
    $tabs.each(function(index, tab) {
      var $tab = $(tab);
      var panel = $panels[index];
      $tab.css({width: tabWidth+'%'});
      $(panel).attr('data-mytw-panel-id', index);
      $tab.attr('data-mytw-tab-id', index);
      $(tab).on('click', onClick);
    })

    // on click event
    function onClick(e) {
      var id = $(this).attr('data-mytw-tab-id');
      $tabs.removeClass('active');
      $(this).addClass('active');
      $panels.hide();
      $($panels[id]).show();
    }
  })
})();