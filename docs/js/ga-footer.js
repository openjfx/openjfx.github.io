jQuery(document).ready(function () {
    jQuery('a[href]').click(function () {
        var match = jQuery(this).attr('href').match(/#\S+/);
        ga('send', 'pageview', location.pathname + match[0]);
    });
});