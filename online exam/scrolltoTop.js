
let btn = document.getElementById("btn");

window.onscroll = function(){showbtn()}

function showbtn(){
   if(document.body.scrollTop > 50){
      btn.style.display = "block";
   }else{
      btn.style.display = "none";
   }
}

// Scroll to top on click
function scroll1(){
   window.scrollTo({
      top:0,
      // behavior:"smooth"
   });
}