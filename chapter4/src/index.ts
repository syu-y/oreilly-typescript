
// 可変長引数の関数
// 型が安全でない
function sumVariadicUnSafe() {
  return Array.from(arguments)
              .reduce((total, current) => total + current, 0);
}
// 型安全である
function sumVariadicSafe(...numbers: number[]) :number {
  return numbers.reduce((total, current) => total + current, 0);
}
