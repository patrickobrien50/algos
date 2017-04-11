//Stan learned something today: that reducing an array's .length immediately
//shortens it by that amount. Given array arr and number x, remove all except
//the last x elements, and return arr (changed and shorter). Given
//([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function onlyKeepTheLastFew(arr,x){
    for(var i = 0; i < x; i++){
        arr[i] = arr[arr.length-x+i];
    }
    arr.length = x;
    return arr;
}

console.log(onlyKeepTheLastFew([2,4,6,8,10],3));
