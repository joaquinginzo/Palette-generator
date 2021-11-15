// Different palettes

const primaryPalette = ['#bcd8c1','#E57A44', '#fff7ae','#420404','#e3655b']
const secondaryPalette = ['#04151f','#183a37', '#efd6ac','#c44900','#432534']
const tertiaryPalette = ['#132a13','#31572c','#4f772d','#90a955','#ecf39e']
const fortaryPalette = ['#160f29','#246a73','#368f8b','#f3dfc1','#ddbea8']
const quinaryPalette =['#6b9080','#eee4e1','#e7d8c9','#e6beae','#b2967d']
const firstColors = ['#bcd8c1', '#04151f', '#132a13', '#160f29','#6b9080']


// Query selectors
const display = document.querySelector('.container')
const buttons = document.querySelectorAll('button')
buttons.forEach((button,index) => {
    button.style.backgroundColor = firstColors[index]
})


const changePalette = (palette) => {
    Array.from(display.children).forEach((column,index)=>{
        column.style.backgroundColor = palette[index]
    }) 
}

const onClick = (e) => {
    e.preventDefault();
    if(e.target.className === 'button-primary'){
        changePalette(primaryPalette)
    } else if (e.target.className === 'button-secondary'){
        changePalette(secondaryPalette)
    } else if (e.target.className === 'button-tertiary') {
        changePalette(tertiaryPalette)
    } else if (e.target.className === 'button-fortary') {
        changePalette(fortaryPalette)
    } else if (e.target.className === 'button-quinary') {
        changePalette(quinaryPalette)
    }
}
buttons.forEach((button) => {
    button.addEventListener('click',onClick)
})

