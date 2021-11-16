// A color palette generator to practice Vanilla JS.

const primaryPalette = ['#bcd8c1','#E57A44', '#fff7ae','#420404','#e3655b']
const secondaryPalette = ['#04151f','#183a37', '#efd6ac','#c44900','#432534']
const tertiaryPalette = ['#132a13','#31572c','#4f772d','#90a955','#ecf39e']
const fortaryPalette = ['#160f29','#246a73','#368f8b','#f3dfc1','#ddbea8']
const quinaryPalette =['#6b9080','#eee4e1','#e7d8c9','#e6beae','#b2967d']
const firstColors = ['#bcd8c1', '#04151f', '#132a13', '#160f29','#6b9080']


// Query selectors
const display = document.querySelector('.container')
const buttons = document.querySelectorAll('button')

// Dynamically assigning a palette to render and corresponding colors to the buttons.
buttons.forEach((button,index) => {
    button.style.backgroundColor = firstColors[index]
})
Array.from(display.children).forEach((column,index) => {
    column.innerText = firstColors[index]
    column.style.backgroundColor = primaryPalette[index]
})


//Defining functions to change colors and text.
const changePalette = (palette) => {
    Array.from(display.children).forEach((column,index)=>{
        column.style.backgroundColor = palette[index]
    }) 
}

const displayColorText = (palette) => {
    Array.from(display.children).forEach((column,index) => {
        column.innerText = palette[index]
    })
}


// Defining function for the buttons.
const onClick = (e) => {
    e.preventDefault();
    if(e.target.className === 'button-primary'){
        changePalette(primaryPalette)
        displayColorText(primaryPalette)
    } else if (e.target.className === 'button-secondary'){
        changePalette(secondaryPalette)
        displayColorText(secondaryPalette)
    } else if (e.target.className === 'button-tertiary') {
        changePalette(tertiaryPalette)
        displayColorText(tertiaryPalette)
    } else if (e.target.className === 'button-fortary') {
        changePalette(fortaryPalette)
        displayColorText(fortaryPalette)
    } else if (e.target.className === 'button-quinary') {
        changePalette(quinaryPalette)
        displayColorText(quinaryPalette)
    }
}

// Adding the event listeners to the buttons.
buttons.forEach((button) => {
    button.addEventListener('click',onClick)
})

