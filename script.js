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
function compareHeight(i,j,newValues){
  values = newValues;

console.log(i,j,boxes[i].style.height,boxes[j].style.height,checkList)

if(values[i] > values[j]){
  if(checkList[i] == undefined && checkList[j] == undefined){    
    checkList[i] = 1;
    checkList[j] = 1;
    x = 43;
    y = -44;
    }
    else if(i in checkList){
      checkList[i] += 1;
      x = x + 43;
      if(checkList[j] == undefined){
        checkList[j] = 1;
        y = - 44;
      }
      else if(j in checkList){
        checkList[j] += 1;
        y = y - 44;
      }
    }
    else if(j in checkList){
      checkList[j] += 1;
      y = y - 44;
      if(i in checkList){
        checkList[i] += 1;
        x = x + 43;
      }
      else if(checkList[i] == undefined){
        checkList[i] = 1;
        x = 43;
      }
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


let val;
val = 0;
let l = 1;
let x = 2000;
let newArr = [];

const interval = setInterval(function() {
  console.log(val,l,values)
  val = compareHeight(val,l,values)
   if(val != l){
    if(val in newArr){
      let temp = newArr.indexOf(val);
      newArr.splice(temp,1);
    }
    else if(l in newArr){
      let temp = newArr.indexOf(val);
      newArr.splice(temp,1);
    }
    newArr.push(values[l]);
    newArr.push(values[val]);
  }
  else{
    if(l in newArr){
      let temp = newArr.indexOf(val);
      newArr.splice(temp,1);
    }
    // else if(val in newArr){
    //   let temp = newArr.indexOf(val);
    //   newArr.splice(temp,1);
    // }
    // newArr.push(values[val])
    newArr.push(values[l])
  }
 
  l += 1;
  x += 2000;
  if(l == 5){
    const nval = newArr;
     values = nval;
     val = 0
     l = 1
    // clearInterval(interval)
  }
   if(l == 6){
    clearInterval(interval)
  }
},x)

});





 
