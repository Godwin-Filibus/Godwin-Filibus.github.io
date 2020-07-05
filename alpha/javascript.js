const button = document.querySelector('.button');
const nav = document.querySelector('.nav');
let state = false;

button.addEventListener('click', toggleNav);

function toggleNav(){
    if(!state){
        nav.style.display = 'inherit';
        // nav.style.position = 'fixed'
        state = !state;
        KeyboardEvent.DOM_KEY_LOCATION_STANDARD.valueOf = "enter"
    }else{
        state = !state
        nav.style.display = 'none';
    }
    // if(state === true){
        
    //     console.log(true)
    // }else{
    //     nav.style.display = 'none';
    //     state = true;
    //     console.log(!true)
    // }
}

let n = 123;
let t = `t'm th"t `
console.log(t)
let out =  `i like ${1 + 33} `
console.log(23 > 32 ? 'yes' : 'no')