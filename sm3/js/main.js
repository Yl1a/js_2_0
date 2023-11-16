const timeBlock = document.querySelector('.time_block');
const timeBtn = document.querySelector('.time_btn');

setTimeout(()=>{
    RemoveBlock();
},2000)

function RemoveBlock(){
    timeBlock.classList.add('active');
    timeBtn.classList.remove('active');
    let count = 5;

    setTimeout(()=>{
        timeBlock.classList.remove('active');
        timeBtn.classList.add('active');
    }, 5000)
}

timeBtn.addEventListener('click', () =>{
    RemoveBlock()
})


const accrordion = document.getElementsByClassName('accord');
for (i = 0; i < accrordion.length; i++){
    accrordion[i].addEventListener('click', function(){
        this.classList.toggle('active');   
    })
}
console.log('heloo')

const BtnUp = document.querySelector(".btnUp");
const block = document.querySelectorAll(".clear_block");
console.log(block)


window.addEventListener('scroll', ()=>{
    
    const height = window.innerHeight;
    const position = window.scrollY;
    
    const blockHeight = block[2].clientHeight;
    const blockMiddle = block[2].offsetTop + blockHeight/2;
    console.log(blockMiddle)

    if(position + height >= blockMiddle){
        BtnUp.style.display = 'block';
    }else{
        BtnUp.style.display = 'none';

    }

})

BtnUp.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

/* const phoneBlock = document.querySelector('.phone_block');
const block = document.querySelectorAll('.block');


window.addEventListener('scroll', () =>{

    const windowHeight = window.innerHeight;

    const scrollPosition = window.scrollY;

    const blockHeight = block[3].clientHeight;

    const blockMiddle = block[3].offsetTop + blockHeight / 2;

    if(scrollPosition + windowHeight >=blockMiddle){
        phoneBlock.style.display = 'block';
    }else{
        phoneBlock.style.display = 'none';
    }

}) */




