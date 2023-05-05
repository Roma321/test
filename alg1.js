function checkHaveSum(arr, sum) {
    let startCursor = 0
    let endCursor = arr.length - 1
    while (startCursor < endCursor) {
        const tSum = arr[startCursor] + arr[endCursor]
        if (tSum == sum) return true
        if (tSum < sum) startCursor++
        else endCursor --
    }
    return false
}

console.log(checkHaveSum([1,2,3,4,5,6,7,8,9], 11))
console.log(checkHaveSum([2,4,6,8,10,12,14,16], 11))