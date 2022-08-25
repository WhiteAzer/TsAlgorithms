export function straightInsertion( array: number[] ): number[] {


  for ( let i: number = 1; i < array.length; i++ ) {
    let current: number = array[ i ]
    let j: number = i - 1

    while ( array[ j ] > current && j >= 0 ) {
      array[ j + 1 ] = array[ j ]
      j--
    }
    array[j + 1] = current
  }

  return array
}