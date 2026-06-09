let arr=[0,2,3,4,0,9,0,7];
let newarr=[];
for(let i=0;i<=arr.length;i++){
    if(arr[i]!=0){
        newarr[newarr.length]=arr[i];
    }
}
console.log(newarr);
