// Task 1: target 'hint-box', create event handler for it on 'click'
$(document).ready(() => {
    const $hintBox = $('.hint-box');

    $hintBox.on('click', () => {
        // Task 2: when the box is clicked, we want the HTML element to 'hint' class to slide into view
        $('.hint').slideToggle(650);
    });

    // Task 3: animating the wrong answers, when clicked, fade out
    $('.wrong-answer-one').on('click', () => {

    });

    $('.wrong-answer-two').on('click', () => {

    });

    $('.wrong-answer-three').on('click', () => {

    });
})