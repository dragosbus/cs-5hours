const mergeSort = nums => {
    if (nums.length < 2) {
        return nums;
    }

    const length = nums.length;
    const midle = Math.floor(length / 2);
    const left = nums.slice(0, midle);
    const right = nums.slice(midle);

    return stitch(mergeSort(left), mergeSort(right));
};


const stitch = (left, right) => {
    let indexLeft = 0;
    let indexRight = 0;
    let result = [];

    while(left.length > indexLeft && right.length > indexRight) {
        if(left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.splice(indexLeft)).concat(right.splice(indexRight));
};

console.log(mergeSort([5,6,3,2,1]));