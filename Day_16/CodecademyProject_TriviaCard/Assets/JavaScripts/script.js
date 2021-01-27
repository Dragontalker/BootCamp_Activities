// Task 1: target 'hint-box', create event handler for it on 'click'
$(document).ready(() => {
    const $hintBox = $('.hint-box');

    $hintBox.on('click', () => {
        // Task 2: when the box is clicked, we want the HTML element to 'hint' class to slide into view
        $('.hint').slideToggle(650);
    });

    // Task 3: animating the wrong answers, when clicked, fade out
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-text-one').fadeOut('slow');
        // Task 5: target the image with clas frown and it make it show itself
        $('.frown').show();
    });

    $('.wrong-answer-two').on('click', () => {
        $('.wrong-text-two').fadeOut('slow');
        $('.frown').show();
    });

    $('.wrong-answer-three').on('click', () => {
        $('.wrong-text-three').fadeOut('slow');
        $('.frown').show();
    });

    // Task 6: create an event handler for correct answer
    $('.correct-answer').on('click', () => {
        // Task 7: make the frowny face to disappear
        $('.frown').hide();
        // Task 8: make the smiley face appear
        $('.smiley').show();
    })
})