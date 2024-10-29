const sort_element = document.querySelector(".new_sorting");

const button = document.querySelector(".bubb_sort");
const new_set_button = document.querySelector(".create");
let boxes = document.getElementsByClassName("box");
let temp;
let values = [];

function bubbleSort(arr) {
  for(let i=0;i<=arr.length-1;i++){
    for(let j = i+1;j<=arr.length-1;j++){
      if(arr[i] > arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}


function createNewSet(){
  for(let i=0;i<=4;i++){
    values.push(Math.floor(Math.random() * 200) + 1);
  }
 
  for(let i=0;i<=4;i++){
  console.log(values[i]+"px","ieie")
  boxes[i].style.height = String(values[i])+"px";
}
//  values = bubbleSort(values);
}



// function doBubSort(){
  
//   for(let i=0;i<=3;i++){
//     boxes[i].style.height = String(values[i])+"px";
//   }
//   while(values.length > 0){
//     values.pop();
//   }
 
// }

const checkList = {};  
let x = 0;
let y = 0;
function compareHeight(i,j){
  console.log(i,j,boxes[i].style.height,boxes[j].style.height,checkList)
 
if(values[i] > values[j]){
  if(checkList[i] == undefined && checkList[j] == undefined){    
    checkList[i] = 1;
    checkList[j] = 1;
    x = 70;
    y = -70;
    }
    else if(i in checkList){
      checkList[i] += 1;
      x = x + 70;
      if(checkList[j] == undefined){
        checkList[j] = 1;
        y = - 70;
      }
    }
    else if(j in checkList){
      checkList[j] += 1;
      y = y - 70;
    }
  boxes[i].style.transform = `translateX(${x}px)`;
  boxes[i].style.transition = "transform 1s ease";
  
  boxes[j].style.transform = `translateX(${y}px)`;
  boxes[j].style.transition = "transform 1s ease";
  j = i;
  console.log(j,"in");
  return j;
}
console.log(j,"out")
return j;
}



button.addEventListener("click",()=> {
  console.log(values)
let k = 0;
let l = 1;
 let val = compareHeight(k,l);

let val2;
setTimeout(function () {
  val2 = compareHeight(val,l+1)
  return val2
 },2000);
console.log(val2,"iteration")
let val3;
setTimeout(function () {
   val3 = compareHeight(val2,l+2)
 return val3
},4000);

let val4;
setTimeout(function () {
  val4 =  compareHeight(val3,l+3)
  return val4;
 },6000);
 
setTimeout(function () {
  return compareHeight(val4,l+4)
 },8000);
 

});
