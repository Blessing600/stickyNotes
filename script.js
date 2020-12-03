var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementsById("check-icon");
var xIcon = document.getElementsById("x-icon");
var  i = 0;

xIcon.addEventListener("click", function(){
    typeNote();
})
checkIcon.addEventListener("click", function (){
    createNote();
})

function typeNote(){
    if(container3.getElementsByClassName.display =="none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display="none";
    }

}

function createNote(){

}

function margin(){
   var random_margin =["-5px","1px", "5px", "10px", "15px", "20px"];
   return random_margin[Math.floor(Math.random() * random_margin.length
    )];
}


function rotate(){
    var random_rotate = ["rotate(-3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", 
    "rotate(-5deg)", "rotate(-10deg)",];
    return random_rotate[Math.floor(Math.rotate() * random_rotate.length)]
}

function color(){
  var random_color =["#c2ff3d","#ff3de8" ,"#3dc2ff" ,"#04e022","#bc83e6", "#ebb328"];

  if (i > random_color.length - 1){
      1=0;
  }
  return random_color[i++];
}
