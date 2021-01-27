$(document).ready(() => {
    // Task 1: add an event handler that shows the .nav-menu element when a user mouse over the .menu element.
    $('.menu').on('mouseenter', () => {
        $('.nav-menu').show();
    });
    
    // Task 2: Added an event handler that hides the .nav-menu element when a user's mouse leaves the .nav-menu element.
    $('.nav-menu').on('mouseleave', () => {
        $('.nav-menu').hide();
    });
}); 
