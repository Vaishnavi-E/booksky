//seclecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopbutton=document.getElementById("add-popup-button")
//call button to new popuplverlay
addpopbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

});
//select cancel button
var cancel=document.getElementById("cancel-popup")

cancel.addEventListener("click",function(event)
{
    event.preventDefault();
    popupoverlay.style.dispaly="none"
    popupbox.style.display="none"

});

//select container,add-book,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

//addbook create
addbook.addEventListener("click",function(event){
event.preventDefault()
var div =document.createElement("div")
div.setAttribute("class","books-container")
div.innerHTML=`<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deletebook(event)">Delete</button>
`
container.append(div)
//clear input after adding
booktitleinput.value="";
bookauthorinput.value="";
bookdescriptioninput.value="";


popupoverlay.style.display="none"
popupbox.style.display="none"

})

//delete

function deletebook(event)
{
    event.target.parentElement.remove();
}