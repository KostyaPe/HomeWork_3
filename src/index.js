'use scrict';
/* eslint-disable no-magic-numbers */

function toggleClass($element, className) {
    $element.className.includes(className)
        ? $element.className = $element.className.replace(className, '').trim()
        : $element.className += ` ${className}`;
}

toggleClass(document.querySelector('.box.shadow'), 'qwe');

function fillForm(params) {
    const data = Object.fromEntries(params.replace('?', '').split('&').map(el => el.split('=')));
    const $inputs = document.querySelector('#reg-form').elements;

    data.email = decodeURIComponent(data.email);

    for (const field in data) {
        if ($inputs[field]) {
            if ($inputs[field].type === 'checkbox') {
                $inputs[field].checked = data[field] === 'true' ? true : false;
            } else {
                $inputs[field].value = data[field];
            }
        }
    }
}

fillForm('?name=Kostya&email=johndoe%40mail.com&city=Odessa&gender=1&terms=true&');