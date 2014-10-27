function recentContent($el) {
  var recentContentData = [];

  $el.find('tr').each(function(index, value) {
    var trData = {};
    var $td = $(value).find('td');
    var $docLink = $($td[1]).find('a');
    var $authorLink = $($td[2]).find('a');
    
    trData.link = $docLink.attr('href');
    trData.title = $docLink.text().trim();
    trData.author = {name: $authorLink.text().trim()};
    trData.author.link = $authorLink.attr('href');
    recentContentData.push(trData);
  })

  function template(data) {
    var docs =$('<ul>').attr('class', 'doc-list');
    $.each(recentContentData, function(i, doc) {
      var $li = $('<li>').attr('class', 'doc-list-doc');
      var $a = $('<a>').text(doc.title).attr('href', doc.link);
      $li.append($a);
      docs.append($li);
    })
    return docs;
  }

  return { 
    getRecentContent: function() {
      return recentContentData;
    },

    render : function(docEl) {
      docEl.append(template(recentContentData));
      return this;
    }
  }
}

module.exports = recentContent;