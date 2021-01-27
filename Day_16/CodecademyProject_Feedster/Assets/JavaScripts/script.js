$(document).ready(() => {
    // Task 1: add an event handler that shows the .nav-menu element when a user mouse over the .menu element.
    $('.menu').on('mouseenter', () => {
        $('.nav-menu').show();
    });
    
    // Task 2: Added an event handler that hides the .nav-menu element when a user's mouse leaves the .nav-menu element.
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
    });

    // Task 3: Add an event handler that adds the .btn-hover class to .btn elements when a user mouses over a .btn element.
    $('.btn').on('mouseenter', event => {
        // Task 5: change the callback functions so only the current button is impacted
        $(event.currentTarget).addClass('btn-hover');
    }).on('mouseleave', event => {
        // Task 4: Chain a mouse leave event handler
        $(event.currentTarget).removeClass('btn-hover');
    })

    // Task 6: use the .on() method to add a keyup event listener to the '.postText' element.
    $('.postText').on('keyup', event => {
        // Task 7: call jQuery's .focus() method on '.postText', this will cause the <textarea> to expect typed text as soon as the page loads.
        $('.postText').focus();
        // Task 8: declare a variable called post and set it equal to the string in the .postText element.
        let post = $(event.currentTarget).val();
        // Task 9: declare another variable called remaining and set it to 140 minus the length of post.
        let remaining = 140 - post.length;
        // Task 10: add the following jQuery code.
        $('.characters').html(remaining);

        // Task 11: make the '.wordcount' message turn red if the user runs out of characters.
        if (remaining <= 0) {
            $('.wordcount').addClass('red');
        } else {
            // Task 12: remove the 'red' class from '.wordcount'.
            $('.wordcount').removeClass('red');
        }
    })
}); 
