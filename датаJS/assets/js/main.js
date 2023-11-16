/* console.log(new Date().toLocaleDateString); */

/* const parametersEL = document.querySelector('.parameters');
console.log(parametersEL)
const dateBtn = document.querySelector('.date');
const timeBtn = document.querySelector('.time');

let action = 'date';

getParameters()

setInterval(() =>{
    getParameters();
}, 1000)

dateBtn.addEventListener('click', getBtn('date'))

timeBtn.addEventListener('click', getBtn('time'))

function getAction(actionParameter){

    const format = new Date();

    if(actionParameter === 'time'){
        return format.toLocaleTimeString();
    }else if(actionParameter === 'date'){
        return format.toLocaleDateString();
    }

}

function getParameters (){
    parametersEL.textContent = getAction(action)

}

function getBtn (nameFormat){
    return function(){
        action = nameFormat
        getParameters()
    }
}
 */
const parametersEL = document.querySelector('.parameters');

const randomBtn = document.querySelector('.random');

randomBtn.addEventListener('click', function(){
    parametersEL.textContent = getRandomArbitrary(10, 100);
}

)


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

