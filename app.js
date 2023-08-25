const slides = document.querySelectorAll(".slide");
let counter=0;
slides.forEach((slide,index)=>{
    slide.style.top=`${index*100}%`;
})
const goPrev=()=>{
    counter--;
    if(counter==-1){
        counter=3;
    }

    slideImage();
}
const goNext = ()=>{
    counter++;
    if(counter==4){
        counter=0;
    }
 
    slideImage();
}
const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateY(-${counter*100}%)`
    })
}