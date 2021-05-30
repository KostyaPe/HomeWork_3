'use strict';
/* eslint-disable no-magic-numbers */
/*eslint-disable no-undef*/

const colors = ['blue', 'red', 'green', 'pink', 'purple', 'cyan', 'tomato', 'grey', 'fuchsia', 'navy', 'darkmagenta'];

function getRandomColor() {
    return colors[Math.floor((Math.random() * (colors.length - 0)) + 0)];
}

$('.counter').on('click', 'button', function () {
    const count = $(this).siblings('.count');
    const result = +count.text() + ($(this).hasClass('plus') ? 1 : -1);

    count.text(result > 0 ? result : 0);
});

$('.square').css('background-color', () => getRandomColor());

$('.squares').on('click', '.square', function() {
    $(this).css('background-color', getRandomColor());

    const cloned = $(this).clone();

    $(this).remove();
    $('.square').last().after(cloned);
});

$('.addTab').on('submit', function(e) {
    e.preventDefault();

    const $inputs = $(`.${this.className} :input`);
    const tabs = $('.tabs button').length;
    const $title = $('<button></button>', {['data-target']: `#content_${tabs}`,}).text($($inputs[0]).val());
    const $content = $('<p></p>', {id: `content_${tabs}`}).text($($inputs[1]).val());

    if ($title.text() && $content.text()) {
        $('.tabs__buttons').append($title);
        $('.tabs__content').append($content);
    }

    if ($('.tabs__buttons button').length === 1) {
        $('.tabs__content p').addClass('active');
    }

    $inputs.val('');
});

$('.tabs__buttons').on('click', 'button', function() {
    const content = $(this).data().target;

    $('.tabs__content p').removeClass('active');
    $(content).addClass('active');
});
