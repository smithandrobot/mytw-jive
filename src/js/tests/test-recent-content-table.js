var recentContent = require('../recent-content-table');

function test() {


  QUnit.module('"Recent Content" Table Parsing Tests');
  QUnit.test('that the recent content table node is found and returns accurate data', function(assert) {
    var table = $('.jive-table.jive-table-widget.jive-table-recentcontent table');
    var rc = recentContent($('.jive-table.jive-table-widget.jive-table-recentcontent table'));
    var content = rc.getRecentContent();

    assert.equal(1, table.length, 'We expect the table to be found');
    assert.equal(content.length, 2, 'We should have 2 recent content objects');
    assert.equal(content[0].author.name, 'David Ford', 'David Ford should be the fist author');
    assert.equal(content[1].author.name, 'Chad Currie', 'Chad Currie should be the second author');
    assert.equal(content[0].author.link, '/people/dford', '/people/dford should be the fist author\s link');
    assert.equal(content[1].author.link, '/people/ccurrie', '/people/ccurrie should be the second author\s link');
    assert.equal(content[0].title, 'Before You Start Writing', 'Before You Start Writing should be the first doc\'s title');
    assert.equal(content[1].title, 'Tone of Voice', 'Tone of Voice should be the second doc\'s title');
    assert.equal(content[0].link, '/docs/DOC-26828', '/docs/DOC-26828 should be the first doc\'s link');
    assert.equal(content[1].link, '/docs/DOC-26829', '/docs/DOC-26829 should be the second doc\'s link');
  })

  QUnit.module('Dom manipulation');
  QUnit.test('that the dom is written to', function(assert) {
    var table = $('.jive-table.jive-table-widget.jive-table-recentcontent table');
    var rc = recentContent($('.jive-table.jive-table-widget.jive-table-recentcontent table'));
    var content = rc.render(table.parent());
    assert.equal($('ul.doc-list').length, 1, 'Doc list ul element should exist');
    assert.equal($('ul.doc-list li').length, 2, 'Doc list should contain 2 documents');
  })
}

test();
module.exports = test;