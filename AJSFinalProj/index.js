

const progressBar = document.querySelector("#progressBar");

window.onscroll =()=>{

    let userPositionFromTheTop = document.documentElement.scrollTop;
    let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (userPositionFromTheTop / totalHeight) * 100;
    progressBar.style.width = scrolled + "%";

    }