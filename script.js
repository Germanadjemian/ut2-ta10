function getSum(array){
    return array.reduce((total, num) => total+num,0)
}

const nums = [1,2,3,4,5]
console.log(getSum(nums));