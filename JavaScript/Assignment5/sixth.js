let arr=[2,3,4,2,4,5,6,4,5,7,8,9,5];
for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
    if(arr[i]==arr[j]){
        console.log(arr[i]);
        
    }

    
   }
}