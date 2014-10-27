function linkTabs($el) {
  var panels = [];
  var activePanelID = 0;

  $el.on('click', onClick)
  console.log($el.css('padding'));
  var width = (100/$el.length)-4;
  $el.each(function(i, tab) {
    var $tab = $(tab);
    $tab.css({width: width+'%'});
    $tab.attr('data-mytw-tab-id', i)
    panels.push($tab.find('ul').attr('data-mytw-panel-id', i))
  })

  function onClick(e) {
    var id = $(this).attr('data-mytw-tab-id');
    if(activePanelID === id) return
    panels[activePanelID].css('display', 'none')
    panels[id].css('display', 'block')
    activePanelID = id
  }
  return {}
}

module.exports = linkTabs