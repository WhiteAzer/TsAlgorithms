export function binaryInsertion( array: number[] ): number[] {
  for ( let i: number = 1; i < array.length; i++ ) {
    let current: number = array[ i ]
    let left: number = 0
    let right: number = i

    while ( left < right ) {
      let mid: number = Math.floor( (left + right) / 2 )
      if ( array[ mid ] <= current ) {
        left = mid + 1
      } else right = mid
    }
    for ( let j: number = i; j > right; j-- ) {
      array[ j ] = array[ j - 1 ]
    }
    array[ right ] = current
  }

  return array
}