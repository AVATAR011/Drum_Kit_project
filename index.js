var drums=document.querySelectorAll(".drum");
for(var i=0;i<drums.length;i++){
  drums[i].addEventListener("click",function(){
    var eventListen=this.innerHTML;
    myFun(eventListen);
    animation(eventListen);
  });
}

document.addEventListener("keypress",function(Event){
  var eventpress=Event.key;
  myFun(eventpress);
  animation(eventpress);
})

function myFun(key){
  switch (key) {
    case 'w':
    var audio=new Audio("./sounds/crash.mp3");
    audio.play();
    break;
    case 'a':
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
    break;
    case 's':
    var audio=new Audio("./sounds/snare.mp3");
    audio.play();
    break;
    case 'd':
    var audio=new Audio("./sounds/tom-1.mp3");
    audio.play();
    break;
    case 'j':
    var audio=new Audio("./sounds/tom-2.mp3");
    audio.play();
    break;
    case 'k':
    var audio=new Audio("./sounds/tom-3.mp3");
    audio.play();
    break;
    case 'l':
    var audio=new Audio("./sounds/tom-4.mp3");
    audio.play();
    break;
  }
}

function animation(events){
  var buttonPressed=document.querySelector("."+events);
  buttonPressed.classList.add("pressed");
  setTimeout(function(){
    buttonPressed.classList.remove("pressed");
  },100);
}
// var audio=new Audio("./sounds/tom-1.mp3");
// audio.play();
