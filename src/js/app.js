var recentContentTable = require('./recent-content-table');
var linkList = require('./link-list-tabs');

var headlines = require('./headlines')
function app() {
  var $table = $('.jive-table jive-table-widget .jive-table-recentcontent');
  var recentContent = recentContentTable($table).render()
}

app();