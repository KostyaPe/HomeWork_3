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
    const form = document.querySelector('#reg-form');

    for (const field in data) {
        if (field === 'email') {
            data[field] = decodeURIComponent(data[field]); // decodeURI не работает :(
            form.elements[field].value = data[field];
        }

        if (field === 'terms') {
            form.elements[field].checked = String(data[field]) === 'true' ? true : false;
        }

        form.elements[field].value = data[field];
    }
}

fillForm('?name=Kostya&email=johndoe%40mail.com&city=Odessa&gender=1&terms=true');