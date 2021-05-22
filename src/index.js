'use strict';
/* eslint-disable no-magic-numbers */

const $addTab = document.querySelector('.addTab');
const $tabsContainer = document.querySelector('.tabs__buttons');
const $contentContainer = document.querySelector('.tabs__content');
const $tabs = $tabsContainer.children;
const $content = $contentContainer.children;


function renderTab (title, content) {
    const $newTab = document.createElement('button');
    const $newContent = document.createElement('p');

    $newTab.textContent = title;
    $newTab.dataset.id = $tabs.length;
    $newContent.textContent = content;

    $tabsContainer.append($newTab);
    $contentContainer.append($newContent);
}

function setActive (index = 0) {
    for (let i = 0; i < $tabs.length; i++) {
        if (i === +index) {
            $tabs[i].classList.add('active');
            $content[i].classList.add('active');
        } else {
            $tabs[i].classList.remove('active');
            $content[i].classList.remove('active');
        }
    }
}

$addTab.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = this.children.title.value;
    const content = this.children.content.value;

    if (title.length > 0 && content.length > 0) {
        renderTab(title, content);
        setActive();
        this.reset();
    }
});

$tabsContainer.addEventListener('click', (e) => setActive(e.target.dataset.id));