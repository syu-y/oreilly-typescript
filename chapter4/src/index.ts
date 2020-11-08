// 数値列挙型
enum Language {
  English,
  Japanese
}

console.log(Language.English);  // 0
console.log(Language.Japanese); // 1

// 文字列列挙型
enum Locale {
  English = "en",
  Japanese = "ja"
}

console.log(Locale.English);  // en
console.log(Locale.Japanese); // jp

let a = 1042;                 // number
let b = 'apples and orange';  // string
const c = 'pineapple';        // pineapple
let d = [true, true, false];  // boolean[]
let e = { type: 'ficus' };    // { type: string }
let f = [1, false];           // (number | boolean)[]
const g = [3];                // number[]
let h = null;                 // any
