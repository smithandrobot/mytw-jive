var linkListTabs = require('../link-list-tabs');

function test() {
  QUnit.module('Link List Tabs');
  QUnit.test('that the link list is interactive', function(assert) {
    var tabEl = $('.jive-widget-formatted-body .jive-rendered-content ul:first>li');
    var tabs = linkListTabs($('.jive-widget-formatted-body .jive-rendered-content ul:first>li'));
    assert.equal(tabEl.length, 3, 'We expect 3 tabs');
  })
}

test();
module.exports = test;