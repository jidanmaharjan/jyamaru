
var value = document.getElementById("toggleId");
var toggle = 0;
function navbarToggle()
{
    if(toggle == 0)
    {
        value.style.left = 0;
        toggle = 1;
    }
    else
    {
        value.style.left = "-100%";
        toggle = 0;
    }
}