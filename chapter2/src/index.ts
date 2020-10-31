console.log('Hello TypeScript!!');

// Exercise 2.5
let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
// let d = c.apple + "4"; // これはOK d:string になる
let d:number = c.apple * 4;
