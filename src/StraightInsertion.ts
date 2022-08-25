export function straightInsertion( array: number[] ): number[] {
  let j: number

  for ( let i: number = 1; i < array.length; i++ ) {
    let current: number = array[ i ]

    for ( j = i; array[ j - 1 ] > current && j; j-- ) {
      array[ j ] = array[ j - 1 ]
    }
    array[ j ] = current
  }

  return array
}