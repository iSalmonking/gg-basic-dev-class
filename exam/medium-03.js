// Medium-03: Dice Gambling
/*
Create a function that takes an array consisting of dice rolls from 1-6. 
Return the sum of your rolls with the following conditions:
If a 1 is rolled, that is bad luck. The next roll counts as 0.
If a 6 is rolled, that is good luck. The next roll is multiplied by 2.
The array length will always be 3 or higher.
*/

function rolls(arr) {
    let base = [...arr];
    let a = 0;
    for(let i = 0; i < base.length; i++) {
        if(base[i] == 1) {
            arr[i+1] = 0;
        }else if(base[i] == 6) {
            arr[i+1] = arr[i+1]*2;
        }
        a =  a + arr[i];
    }
    return a;
}

