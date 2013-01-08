/**
 * Receive a message from the main window and display it.
 * @param {Event} event Event that fired this handler (message).
 */
var receiveMessage = function(event) {
    window.console.log(event.data);
    $('#notes').html(event.data);
};

window.addEventListener('message', receiveMessage, false);
