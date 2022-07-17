'use strict';

console.log('Hello World, Javascript is online');
const hamburger = document.getElementById('hamburger');
const navUL =document.getElementById('nav-ul');
const content =document.getElementById('entire-page');

hamburger.addEventListener('click', () => {
	navUL.classList.toggle ('show');
} );

