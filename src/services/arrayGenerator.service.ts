export function arrayGenerator( n: number ): number[] {
  let array: number[] = []

  for ( let i: number = 0; i < n; i++ ) {
    array.push( Math.floor( Math.random() * n ) )
  }

  return array
}