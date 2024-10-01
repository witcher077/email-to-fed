const arr=[10,2,1,9,3,4,5,6,7,8];

// push - it adds element at the end of the Array
// arr.push(100)

// pop - it removes the last element of the Array
// arr.pop(5)

// Shift - This method removes the first array element
// arr.shift()

// unshift -This method adds a new element at the beginning of an array
// arr.unshift(50)

// filter - it filters the array on the basis of given condition and returns a different aaray
// const filteredArr = arr.filter((ele)=>ele>6)

// reduce - It itrete thtough the array and return a single value depending on callback function we pass.

// const sum =arr.reduce(myFunction)

// function myFunction(total, value) {
//     return total + value;
//   }


// include - It checks wheater a paticular value is present inside array or not and returns a boolean value.
// const isPresent =arr.includes(6)

// indexof - It gives index of the element.
// console.log(indexof(6));

// foreach - It is used to iterate thought array and perform some action.
// arr.forEach((ele)=>{
//     console.log(ele);
// })

// sort - it is used to sort the array in accending order. alters the original array.
// arr.sort()

// reverse - It reverse array elements. alters the original array.
// arr.reverse()

// slice - it return a sliced array from orignal aaray, it takes two args , start index and end index, it includes the start index till endIndex-1 .
// arr.slice(2,5) 

// Splice - it is used to add and remove element from array at the same time.
            // - 1st argument tells from which index element needs to be removed
            // - 2nd argument tells how many elements will be removed
            // - rest arguments will be added to array
// arr.splice(2,3,"Ashok","Ram")


console.log(arr);