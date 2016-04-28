function onClickMe()
{
    //this.textContent = "You clicked me!"; //this is a keyword .. in an eventhandler.. this refers to the element that raised the event - in this case - the button 
    
    var p = document.querySelector(".hide-show-text");
    //p.style.display = "none";
    
    if (p.style.display === "block")  //double equals does type conversions .. 3 equal signs .. the data types of both sides also should bethe same, not just the value
    {
        p.style.display = "none";
    }
    else{
        p.style.display = "block";
    }
}

var btnClickMe = document.querySelector(".btn-click-me");     //allows us to pass a selector syntax that is exactly the same as in the css files

btnClickMe.addEventListener("click", onClickMe);