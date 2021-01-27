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
}); 
