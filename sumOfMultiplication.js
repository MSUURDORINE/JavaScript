let number = [2, 7, 8, 5];
let target = 9

for(let index = 0; index <= number.length; index++){
    for(count = index + 1; count  <= number.length; count++){
        sum = (number [index] + number[count]);
        if(sum == target){
        console.log(index, count);
    }    
   }     
 }       
