function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                var a = arr[j];
                var b = arr[j+1];
                arr[j+1] = a;
                arr[j] = b;
            }
        }
    }
    return arr;
}

bubbleSort([8,4,2]);