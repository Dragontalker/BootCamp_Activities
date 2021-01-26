// Task 1: Start by using jQuery to add a ready method call to the document.
$(document).ready(() => {
    const $cart = $('#cart');
    const $account = $('#account');
    const $help = $('#help');

    const $cartMenu = $('#cartMenu');
    const $accountMenu = $('#accountMenu');
    const $helpMenu = $('#helpMenu');

    // Add click event handlers to '#cart'
    $cart.on('click', () => {
        $cartMenu.show();
    })

    // Add click event handlers to '#account'
    $account.on('click', () => {
        $accountMenu.show();
    })

    // Add click event handlers to '#help'
    $help.on('click', () => {
        $helpMenu.show();
    })
})