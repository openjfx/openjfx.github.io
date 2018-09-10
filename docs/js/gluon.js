$(function() {
    // Hide all non-active div
    $('.hidden').hide();
    
    // Navigate to anchor if the url has hash
    var anchorHash = window.location.hash;
    if (anchorHash.length > 1) {
        loadContent($('a[href="' + anchorHash + '"]'));
    }
    
    // Make sure correct anchor links are loaded when url changes
    $(window).bind('hashchange', function () {
        var hash = window.location.hash.slice(1);
        loadContent($('a[href="#' + hash + '"]'));
        scrollTo(0, 0);
    });
    
    // Click on anchor links should load content
    $('a[href^="#"]').on('click', function() {
        // TODO: Has performance issues
        // $('a[data-toggle="collapse"][class!="collapsed"]').click();
        var childNode = $(this).find('[href$="-plugin"]');
        if (childNode != null) {
            var dataParent = $(this).attr('data-parent');
            if (dataParent == null) {
                var href = $(this).attr('href');
                var dp = $('a[href="' + href + '"]').not(this).attr('data-parent');
                if (dp != null) {
                    // TODO: shouldn't close when already open
                    $('a[href="' + dp + '"][data-parent="' + dp + '"]').click();
                }
            }
        }
        loadContent(this);
    });
    
    // Add href to report a problem buttons
    $('a[data-section]').each(function() {
        var emailWithSubject = "https://gluonhq.com/about-us/contact-us/?comment=" + 
            encodeURIComponent("Problem with Getting Started in section '") +
            encodeURIComponent($(this).attr('data-section') + "'") +
            encodeURIComponent("\n\nDescribe the problem: ");
        $(this).attr('href', emailWithSubject);
    });
    
    // TODO: Find a better lib to include local html files
    // Because we are using the csi js lib to include the pages,
    // this doesn't work on document ready
    
    // Replace all $ with non-selectable span
    setTimeout(function() {
        $('code').each(function () {
            var content = $(this).html();
            var unselectableContent  = replaceAll(content, "$ ", "<span class=\"no-select\">$ </span>");
            $(this).html(unselectableContent);
        });
    }, 1000);

    // Load content
    function loadContent(hyperlink) {
        // Activate link only if there aren't parent nodes
        var dataRemote = $(hyperlink).attr('data-remote');
        if (dataRemote == null) {
            
            var target = $(hyperlink).attr('href');
            if (target != null) {

                // Show div and hide all siblings
                $(target).show().siblings(".content div").hide();

                // Remove active from all links in nav-bar
                $('a[class*="list-group-item"]').removeClass("active");
                
                if ($(hyperlink).hasClass('list-group-item')) {
                    $(hyperlink).addClass("active");
                }
            }
        }
    }
    
    function replaceAll(str, find, replace) {
        return str.split(find).join(replace);
    }
});
