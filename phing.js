$(function() {
    $.deck('.slide');

    $('#style-themes').change(function() {
        $('#style-theme-link').attr('href', $(this).val());
    });

    $('#transition-themes').change(function() {
        $('#transition-theme-link').attr('href', $(this).val());
    });

    $.extend(true, $.deck.defaults, {
        hashPrefix: 'slide-',
        preventFragmentScroll: true
    });

    prettyPrint();
});
