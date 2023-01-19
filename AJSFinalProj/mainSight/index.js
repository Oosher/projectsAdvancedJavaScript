
const navBar = document.querySelector("#navBar");

const progressBar = document.querySelector("#progressBar");

const accessabilityContainer = document.querySelector("#accessabilityContainer");

const accessabilityOptions = document.querySelector("#accessabilityOptions");

const accessabilityImg = document.querySelector("#accessabilityImg");

const closeAccessabilityMenu = document.querySelector("#closeAccessabilityMenu");

const increaseFontSize = document.querySelector("#increaseFontSize");

const decreaseFontSize = document.querySelector("#decreaseFontSize");

const grayscale = document.querySelector("#grayscale");

const contrast = document.querySelector("#contrast");

const biggerCursor = document.querySelector("#biggerCursor");

const underline = document.querySelector("#underline");

const allElements =  document.getElementsByTagName("*");


let tempArray = allElements;

let accessabilityState = false;

let isGrayScale = false;

let contrasted = false;

let underlined = false;

let additiveFontSize = 0;

const baseFontSize = 1.2;

//on scroll progress bar
window.onscroll =()=>{

    let userPositionFromTheTop = document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (userPositionFromTheTop / totalHeight) * 100;
    progressBar.style.width = scrolled + "%";

    }


    //accessability start 

    accessabilityImg.addEventListener("click",openAccessabilityMenu);

    closeAccessabilityMenu.addEventListener("click",openAccessabilityMenu);

    increaseFontSize.addEventListener("click",()=>{
        additiveFontSize+=0.15;
        changeFontSize();
        
    });

    decreaseFontSize.addEventListener("click",()=>{

    additiveFontSize-=0.15;
    changeFontSize();

    });


    grayscale.addEventListener("click",()=>{

        for (const key in allElements) {
            if (allElements[key].style!=undefined) {
                if (isGrayScale) {
                    allElements[key].style.filter="grayscale(0%)";
                }
                else{
                    allElements[key].style.filter="grayscale(100%)";
                }
            }
            
        }

        isGrayScale = !isGrayScale;

    });

    contrast.addEventListener("click",()=>{

        for (const key in allElements) {
            if (allElements[key].style!=undefined) {
                if (contrasted) {
                    allElements[key].style.filter="contrast(100%)";
                }
                else {
                allElements[key].style.filter="contrast(150%)";
                }
                
            }
        }
            contrasted = !contrasted;
    });


biggerCursor.addEventListener("click",()=>{
    
    document.body.style.cursor ="url(./assets/cursor.png),auto";

});

underline.addEventListener("click",()=>{

       for (const key in allElements) {
            if (allElements[key].style!=undefined) {
                if (underlined) {
                    allElements[key].style.textDecoration= "none";
                }
                else {
                allElements[key].style.textDecoration= "underline";
                }
                
            }
        }

        underlined =!underlined;

});

function openAccessabilityMenu(){

    if(accessabilityState){

        accessabilityOptions.style.display="none";
        accessabilityImg.style.display="block";

        accessabilityState=false;



    }
    else{

        accessabilityOptions.style.display="flex";
        accessabilityImg.style.display="none";

        accessabilityState = true;

        console.log(accessabilityState);
        

    }
}



function changeFontSize (){

        
        for (const key in allElements) {
            if (allElements[key].style!=undefined) {
                allElements[key].style.fontSize =(baseFontSize+additiveFontSize)+"rem";
            }
            
        }
}


