(function featuredDocs() {
  $(function() {

    getFeaturedDocs();

    function getFeaturedDocs() {
      var endPoint = 'https://thoughtworks.jiveon.com/api/core/v3/places/'+placeID+'/contents/featured';
      if($('.featured-docs').length > 0) {
        $.ajax(endPoint)
         .fail(onData)
      }
    }

    function onData(d) {
      if(d.status === 200) {
        var json = d.responseText.replace('throw \'allowIllegalResourceCall is false.\';', '');
        var docData = JSON.parse(json);

        $('.featured-docs ul').empty();
        console.log(docData)
        $.each(docData.list, function(index, doc) {
          //if(doc.type === 'document') {
            var $docEl = $(template(doc));
            $('.featured-docs ul').append($docEl);
          //}
        })
      }else{
        console.log('Error getting featured doc data. Response code: ', d.status, d)
      }
    }

    function template(data) {
      return '<li class="grid-cell-3 ">'+
              '  <div class="featured-docs__doc">'+
              '    <a target="_parent" href="'+data.resources.html.ref+'">'+data.subject+'</a>'+
              '    <div class="featured-docs__author">'+
              '      <a href="'+data.author.resources.html.ref+'">'+
              '        <img src="'+data.author.resources.avatar.ref+'" alt=""><br/>'+
              '        '+data.author.displayName+
              '      </a>'+
              '    </div>'+
              '  </div>'+
              '</li>';
    }
  });
})();