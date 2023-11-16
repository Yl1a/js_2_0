

const timeBlock = document.querySelector('.time_block');
const timeBtn = document.querySelector('.time_btn');
const countEl = document.querySelector('.count');


setTimeout(()=>{

    countFunc();

}, 2000)

timeBtn.addEventListener('click', () =>{

    countFunc()

})

function countHtml(value){
    countEl.innerHTML = value;
}

function countFunc() {
    timeBlock.classList.add('active');
    let count = 5;
    countHtml(count);

    timeBtn.classList.remove('active')
    
    const countInteval = setInterval(()=>{

        count--

        countHtml(count);

        if(count === 0){
            clearInterval(countInteval)
            timeBlock.classList.remove('active')
            timeBtn.classList.add('active')
        }

    }, 1000)
}
