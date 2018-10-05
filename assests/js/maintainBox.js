window.addEventListener('load', init);

function init(){
    boxHeightMaintain();
    window.addEventListener("resize", boxHeightMaintain);
}

function boxHeightMaintain(){
    document.querySelector(".box").style.height = (document.querySelector(".box").offsetWidth + "px");
}