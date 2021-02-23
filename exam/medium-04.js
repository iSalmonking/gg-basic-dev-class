// Medium-04: Combine Arrays

/*
Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, 
the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".
*/

function combineArrays(arr1, arr2, arr3) {
    let arrs = [arr1, arr2, arr3];
    // console.log(arrs)
    let length = Math.max(arr1.length, arr2.length, arr3.length);
    let finalArr = [];
    for(let i = 0; i < length; i++) {
        let newArr = [];
        for(let j = 0; j < arrs.length; j++) {
            if(!arrs[j][i] && arrs[j][i] != false) {
                newArr.push("*")
            }else {           
                newArr.push(arrs[j][i]);
            }
        }
        finalArr.push(newArr);
    }return (finalArr)
}
combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 1, 9]);