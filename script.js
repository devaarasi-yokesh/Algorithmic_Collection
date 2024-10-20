var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var sort= document.querySelector("#sort");
var search = document.querySelector("#search");

var sort_bar = document.querySelector("#sort_bar");
var search_bar = document.querySelector("#search_bar");
var click_count = 0;
var side_click = 0;

var bubble = document.querySelectorAll(".bubble");

// Menu button clicks activates animation based on no of clicks //
menu.addEventListener("click",function() {
  click_count += 1
    if(click_count % 2 != 0){
  nav.className = "out";
  }
  else{
    nav.className = "in";
  }
});

//nav button clicks activates animation based on no of clicks //
sort.addEventListener("click",function(){
  side_click += 1;
  if(side_click % 2 != 0){
    sort_bar.className = "show";
  }
  else{
    sort_bar.className = "fade";
  }
})
search.addEventListener("click",function(){
  side_click += 1;
  if(side_click % 2 != 0){
    search_bar.className = "show";
  }
  else{
    search_bar.className = "fade";
  }
})


/* Hover on main nav buttons will shows side nav bar appropriately */

sort.addEventListener("mouseover",function(){
    sort_bar.style.opacity = 1;
  });

sort.addEventListener("mouseout",function(){
    sort_bar.style.opacity = 0;
})


/* Sort Chart Data */
var sortDataVal = ["55vh","17vh","36vh","12vh","40vh","30vh","22vh","42vh","32vh","18vh"];
var sort_chartBox = document.querySelectorAll(".sort_chart_box");
for(let i = 0;i < sort_chartBox.length;i++){
  console.log(sort_chartBox[i]);
  sort_chartBox[i].style.height = sortDataVal[i];
}

var chat = document.getElementById("chat_one");
function doAnim(){
  chat.classList.toggle = "bubble_animation";
}

const sort_element = document.querySelector(".new_sorting");
const origins = sort_element.getBoundingClientRect();
const button = document.querySelector(".initiate");
const new_set_button = document.querySelector(".new_set");
let boxes = document.getElementsByClassName("box");
console.log(boxes[0]);

let values = [];
for(let i=0;i<=7;i++){
  values.push(Math.floor(Math.random() * 200) + 1);
}

for(let i=0;i<=7;i++){
  console.log(values[i]+"px","ieie")
  boxes[i].style.height = String(values[i])+"px";
}

let temp;
function bubbleSort(arr) {
  for(let i=0;i<=arr.length-1;i++){
    for(let j = i+1;j<=arr.length-1;j++){
      if(arr[i] > arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
     
      console.log(i,j);
    }
  }
  return arr;
}

function anim_box(arr){
  for(let i=0;i<=arr.length-1;i++){
    for(let j = i+1;j<=arr.length-1;j++){
      if(i==0){
        boxes[i].classList.add("leftRight");
        boxes[i+1].classList.add("leftRight");
      }
      else if(i==1){
        boxes[i].classList.add("leftRight");
        boxes[i+1].classList.add("leftRight");
      }
      
          if(arr[i] < arr[j]){
          }
      
      
      console.log(i,j);
    }
  }
}

console.log(bubbleSort(values));
button.addEventListener("click",()=>{
  const new_val = bubbleSort(values);
  anim_box(values);
  for(let i=0;i<=7;i++){
    console.log(values[i]+"px","ieie")
    boxes[i].style.height = String(new_val[i])+"px";
  }
})

new_set_button.addEventListener("click",()=>{
  let values = [];
for(let i=0;i<=7;i++){
  values.push(Math.floor(Math.random() * 200) + 1);
}

for(let i=0;i<=7;i++){
  console.log(values[i]+"px","ieie")
  boxes[i].style.height = String(values[i])+"px";
}
})