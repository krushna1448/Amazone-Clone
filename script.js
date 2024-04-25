const imgs  = document.querySelectorAll('.header-slider ul img');
const prev_btn  = document.querySelector('.control_prev');
const next_btn  = document.querySelector('.control_next');
// in above code we slect html element where we want to implent js logic
let n = 0; // first img have been show on screen.

function changeSlide(){
    for(let i =0; i < imgs.length; i++ ){
        imgs[i].style.display  = 'none';//here slect imges and visibility  none
    }
    imgs[n].style.display  = 'block';// here select img one after one and display on screen 
}

changeSlide();

prev_btn.addEventListener('click' , (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length -1;
    }
    changeSlide();
})
next_btn.addEventListener('click' , ()=>{
    if(n < imgs.length -1){
        n++;
    }else{
        n = 0
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
item.addEventListener('wheel' ,(evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
} );
}