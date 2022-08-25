export function straightSelection( array: number[] ): number[] {
  for ( let i: number = 0; i < array.length - 1; i++ ) {
    let min: number = i

    for ( let j: number = i + 1; j < array.length; j++ ) {
      if ( array[ j ] < array[ min ] ) {
        min = j
      }
    }
    let template: number = array[ i ]
    array[ i ] = array[min]
    array[min] = template
  }

  return array
}
