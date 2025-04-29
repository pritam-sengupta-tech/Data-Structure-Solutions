function bubbleSort(array){
    for(let i = array.length - 1; i > 0; i--){
        for (let j = 0;  j < i; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]; // Store the current element in a temporary variable
                array[j] = array[j+1]; // Swap the current element with the next element
                array[j+1] = temp; // Assign the value of the temporary variable to the next element
            }
        }
    }
    return array; // Return the sorted array
}

let unsorted_array = [5, 3, 8, 4, 2];
console.log(bubbleSort(unsorted_array)); // Output: [2, 3, 4, 5, 8]