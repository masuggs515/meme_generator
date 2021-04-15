const meme = document.querySelector('#meme-output');
const form = document.querySelector('form');
const topText = document.querySelector('#top-text-input');
const bottomText = document.querySelector('#bottom-text-input');
const imgInput = document.querySelector('#img-input');
const fontInput = document.querySelector('#font');
const submit = document.querySelector('#submit');
const range = document.querySelector('#range');

let count =0; 
form.addEventListener('submit', makeMeme)

function makeMeme(e){
    e.preventDefault();
    if(!imgInput.value){
        alert('Please enter image url')
        return;
    }
    if(!topText.value && !bottomText.value){
        alert('Please include text for at least top or bottom');
        return;
    }
    let newMeme = document.createElement('div');
    newMeme.innerHTML = `<button id="delete">X</button>
    <img src="${imgInput.value}" id="meme-img">
    <h3 id="top-text">${topText.value}</h3>
    <h3 id="bottom-text">${bottomText.value}</h3>   
    `
    meme.prepend(newMeme);
let deleteMeme = document.querySelector('#delete');

    newMeme.addEventListener('click', function(e){
        let t = e.target;
        if(t.tagName == 'BUTTON'){
        t.parentElement.remove(newMeme);
    }
})

imgInput.value = '';
topText.value ='';
bottomText.value = ''; 
count++;
if(count == 1){
    submit.innerText = 'GIVE ME MOAR MEMES'
}else if(count>= 4){
    submit.innerText = "You're a meme God"
}
let memeTextTop = document.querySelector('#top-text');
let memeTextBottom = document.querySelector('#bottom-text');

if(newMeme){
    range.addEventListener('mouseup', function(){
        memeTextTop.style.fontSize = range.value + 'px';
        memeTextBottom.style.fontSize = range.value + 'px';

    })
}
}


