$(document).ready(() => {
    // Task 2: add a keyup event handler to '#text'
    $('#text').on('keyup', event => {
        // Task 3: call the html methods on '.preview' element and pass it the current value of current target of event.
        $('.preview').html($(event.currentTarget).val());
    })
})