export const findIndices = (array: string[], findInArray: string): number[] => {
    const indices: number[] = []    
    let idx: number = array.indexOf(findInArray)

    while(idx !== -1) {
        indices.push(idx)
        idx = array.indexOf(findInArray, idx + 1)
    }
    return indices
}

let mergedArray: string[] = []

export const mergeArrays = (newStateArray: string[], oldStateArray: string[]) => {
    console.log("1:" + mergedArray)
    newStateArray.forEach((letter: string, i: number) => {
      console.log("2:" + mergedArray)
      if (!oldStateArray.length) return
      console.log("3:" + mergedArray)
      if (letter === "_" && oldStateArray[i] === "_") return mergedArray[i] = "_"
      console.log("4:" + mergedArray)
      if (letter === "_" && oldStateArray[i] !== "_") return mergedArray[i] = oldStateArray[i]
      console.log("5:" + mergedArray)
      if (letter !== "_" && oldStateArray[i] === "_") return mergedArray[i] = letter
      console.log("6:" + mergedArray)
    })
    console.log("7:" + mergedArray)
    return mergedArray
}