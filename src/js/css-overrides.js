(function overridecss() {
  $(function() {
    var cssFile = 'https://thoughtworks.fileburst.com/mythoughtworks/css/overrides.css';
    var viCssFile = 'https://thoughtworks.fileburst.com/mythoughtworks/css/visual-identity-overrides.css';
    var fonts = 'https://fonts.googleapis.com/css?family=Open+Sans:900';
    var $css = $('<link>');
    var $viCss = $('<link>');
    var $fonts = $('<link>');

    $css.attr('href', cssFile);
    $css.attr('rel', 'stylesheet');

    $viCss.attr('href', viCssFile);
    $viCss.attr('rel', 'stylesheet');

    $fonts.attr('href', fonts);
    $fonts.attr('rel', 'stylesheet');

    $j = window.parent.jQuery;

    $j('body', window.parent.document).append($css);
    $j('body', window.parent.document).append($viCss);
    $j('body', window.parent.document).append($fonts);
  })
})();