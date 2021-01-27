$(document).ready(() => {
    // Task 2: add a keyup event handler to '#text'
    $('#text').on('keyup', event => {
        // Task 3: call the html methods on '.preview' element and pass it the current value of current target of event.
        $('.preview').html($(event.currentTarget).val());
    });

    // Task 4: attach a change event handler to the <select> filed with an id of 'font'.
    $('#font').on('change', event => {
        // Task 5: use the css method to change the value of the '.preview' element's font-family property to the current value of this menu
        $('.preview').css({
            fontFamily: $(event.currentTarget).val()
        });
    });

    // Task 6: do the same thing with font-weight
    $('#weight').on('change', event => {
        $('.preview').css({
            fontWeight: $(event.currentTarget).val()
        });
    });

    // Task 7: use a keyup event handler to change the font-size
    $('#size').on('keyup', event => {
        // Task 8: create a variable called fontSize
        let fontSize = $(event.currentTarget).val() + 'px';

        // Task 9: change the font-size property of the preview text to the value stored in fontSize
        $('.preview').css({
            fontSize: fontSize
        })

    })
})