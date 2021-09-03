


var value = document.getElementById("toggleId");
var toggle = 0;
function navbarToggle()
{
    if(toggle == 0)
    {
        value.style.bottom = "5.5rem";
        toggle = 1;
    }
    else
    {
        value.style.bottom = "-100%";
        toggle = 0;
    }
}
value.onclick = function()
{
    value.style.bottom = "-100%";
        toggle = 0;
}

function work(x){
    if(x.matches)
    {
        vid.src="assets/testwork34.mp4";
    }
    else{
        vid.src="assets/testwork219.mp4";
    }

}
let vid = document.getElementById("worksvideo");
let x = window.matchMedia("(max-width:512px)")
work(x);
x.addListener(work);
vid.muted = true;
vid.play();


let dm = document.getElementById("dmtoggler");


if(localStorage.getItem("theme")== null)
{
    localStorage.setItem("theme","light");
}

let localData = localStorage.getItem("theme");
if(localData == "light")
{
    dm.src="assets/half-moon.svg";
    document.body.classList.remove("darkmode");
}
else if(localData == "dark")
{
    dm.src="assets/sun.svg";
    document.body.classList.add("darkmode");
    
}
dm.onclick = function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode"))
    {
        dm.src="assets/sun.svg";
        localStorage.setItem("theme","dark");
    }
    else
    {
        dm.src="assets/half-moon.svg";
        localStorage.setItem("theme","light");
    }
}