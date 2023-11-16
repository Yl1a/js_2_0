const statusActive = document.querySelectorAll('.status_item');
const content = document.querySelectorAll('.homes_content');

statusActive.forEach(function(item){
    item.addEventListener('click', function(){
        let currentActive = item;
        let tabId = currentActive.getAttribute('data-tab');
        let currentTub = document.querySelector(tabId);
        
        content.forEach(function(item){
            item.classList.remove('active')
        })
        statusActive.forEach(function(item){
            item.classList.remove('active')
        })

        currentTub.classList.add('active');
        currentActive.classList.add('active');
    })
})


/* for(let x = 0; x < statusActive.length; x++){
    statusActive[x].addEventListener('click', () =>{
        for(let y = 0; y < content.length; y++){
            if(x == y){
                content[y].classList.add('.active');
            }else{
                content[y].classList.remove('.active')
            }
        }
    })
} */



