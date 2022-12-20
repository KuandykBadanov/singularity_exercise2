function multiply(arr) {
    return function(v) {
       let newArray = [];
       for (let i=0; i<arr.length; i++) {
           newArray.push(arr[i] * v);
       }
       return newArray;
    }
 }

 multiply([4, 6, 5])(10)
