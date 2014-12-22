(function categories() {
  $(function() {
    var categoriesEndPoint = 'https://my.thoughtworks.com/api/core/v3/places/'+placeID+'/categories'
    var $categories = $('.categories');

    if($categories.length > 0) {
      $.ajax(categoriesEndPoint)
       .fail(onData)
    }

    function onData(e) {
      if(e.status == 200) {
        var html = '';
        var json = e.responseText.replace('throw \'allowIllegalResourceCall is false.\';', '')
        var categoriesData = JSON.parse(json)
        $.each(categoriesData.list, function(index, category) {
          html += template(category)
        })

        $('.categories .grid').append($(html))
      }else{
        console.log('Error getting categories data. Response code: ', e.status, e)
      }
    }

    function placeURL() {
      var segments = window.parent.location.pathname.split('/');
      return window.parent.location.origin+'/'+segments[1]+'/'+segments[2];
    }

    function template(data) {
      return '<div class="grid-cell-3">'+
                '<div class="categories__category">'+
                  '<a href="'+placeURL()+'/content?filterID=contentstatus[published]~category['+slugify(data.name)+']">'+
                    data.name+
                  '</a>'+
                '</div>'+
              '</div>';
    }

    function slugify(str) {
      return str.replace(' ', '-').toLowerCase()
    }
  })
})();