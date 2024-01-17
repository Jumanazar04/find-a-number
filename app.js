const form = document.querySelector('#form');
const input = document.getElementById('number');
const text = document.getElementById('text');
const body = document.querySelector('body');
const btn = document.getElementById('generate');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    genareteNumber()
})

function genareteNumber (){
    let num = Math.floor(Math.random()* 11)
    return num
}

const hiddenNumber = genareteNumber()

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    let valInp = input.value
    if(valInp == hiddenNumber){
        text.textContent = 'You are won!!!!'
        body.style.background = 'green'
    }else if (valInp < hiddenNumber){
        text.textContent = 'siz oylagan son yashiringan sondan kichkina'
    }else if (valInp > hiddenNumber){
        text.textContent = 'siz oylagan son yashiringan sondan katta'
    }

    console.log(hiddenNumber);

    form.reset()
})

console.log(genareteNumber());