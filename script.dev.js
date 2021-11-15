"use strict";

// Different palettes
var primaryPalette = ['#bcd8c1', '#E57A44', '#fff7ae', '#420404', '#e3655b'];
var secondaryPalette = ['#04151f', '#183a37', '#efd6ac', '#c44900', '#432534'];
var tertiaryPalette = ['#132a13', '#31572c', '#4f772d', '#90a955', '#ecf39e'];
var fortaryPalette = ['#160f29', '#246a73', '#368f8b', '#f3dfc1', '#ddbea8'];
var quinaryPalette = ['#6b9080', '#eee4e1', '#e7d8c9', '#e6beae', '#b2967d'];
var firstColors = ['#bcd8c1', '#04151f', '#132a13', '#160f29', '#6b9080']; // Query selectors

var display = document.querySelector('.container');
var buttons = document.querySelectorAll('button');
buttons.forEach(function (button, index) {
  button.style.backgroundColor = firstColors[index];
});

var changePalette = function changePalette(palette) {
  Array.from(display.children).forEach(function (column, index) {
    column.style.backgroundColor = palette[index];
  });
};

var onClick = function onClick(e) {
  e.preventDefault();

  if (e.target.className === 'button-primary') {
    changePalette(primaryPalette);
  } else if (e.target.className === 'button-secondary') {
    changePalette(secondaryPalette);
  } else if (e.target.className === 'button-tertiary') {
    changePalette(tertiaryPalette);
  } else if (e.target.className === 'button-fortary') {
    changePalette(fortaryPalette);
  } else if (e.target.className === 'button-quinary') {
    changePalette(quinaryPalette);
  }
};

buttons.forEach(function (button) {
  button.addEventListener('click', onClick);
});