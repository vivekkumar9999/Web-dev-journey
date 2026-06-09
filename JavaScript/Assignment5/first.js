// program for existence of a number in an array

let arr=[1,2,5,6,9];
let num=4;
let found=false;
  for(let i=1;i<=arr.length;i++){
    if(arr[i]==num){
        found=true;
          break;
    }
  }
    if(found){
        console.log("yes");
        
    }
     else  console.log("not found");
     