$(function() {
    $.deck('.slide');

    var notes = window.open('notes.html', 'notes',
        'menubar=no,toolbar=no,location=no,dependent=yes,height=800,width=1200');

    $(document).bind('deck.change', function(event, from, to) {
        displayNotes(notes);
    });

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


/**
 * Send the speaker notes to the speaker notes window.
 * @param {string} notes HTML of the notes to send.
 */
var displayNotes = function(notes) {
    // Set timeout to give the deck classes time to settle down. Otherwise
    // .deck-current still points to the slide we're leaving.
    window.setTimeout(function() {
        notes.postMessage($('.deck-current .note').html(), '*');
    }, 0);
};
