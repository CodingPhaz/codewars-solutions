function divideArray(arr, d){
    result = []
    for(let i = 0; i < arr.length; i += d){
        const chunk = arr.slice(i, i + d)
        result.push(chunk)
    }

    console.log(result[1].length);
    
    
    
    // const result = arr.reduce((resultArray, item, index) => {
    //     const chunkIndex = Math.floor(index/d)
        
    //     if(!resultArray[chunkIndex]){
    //         resultArray[chunkIndex] = []
    //     }

    //     resultArray[chunkIndex].push(item)

    //     return resultArray
    // },[])

    // console.log(result);
}


divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)