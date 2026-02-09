    // Codewars  6 kyuu  masalalari 


// ======================================================================================

    // 1 masaalaaa

    // linki : https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

    // Name :Bitlarni hisoblash

    // javobii : 
    // : function countBits(n) {
//     return n.toString(2).split("").filter((bit)=>bit === "1").length
// }

// =================================================================================


// 6 Masaalaaa 

// Linkii : https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Name :   Find the odd int

// Javobii : 
// function findOdd(A) {
//   for(let i = 0; i < A.length; i++){
//    let count = A.filter((o)=> o === A[i]).length
//     if(count % 2 === 1){
//       return A[i]
//     }
//   }
// }

// =====================================================================================================================================

// 7 Masaalaaa

// Nameeee :Split Strings

// Linkii : https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Javobiii : 

// function solution(str){
//   let res = [];
//   if(str.length % 2 !== 0){
//     str+=  "_"
//   }
//   for(let i = 0; i < str.length; i+=2){
//      res.push(str.slice(i,i + 2))
//   }
//   return res
// }

// ============================================================================================================================

// 8 Masaalaaaaa

// Nameeee : Replace With Alphabet Position

// Linkiii : https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Javobiiii : let alphabetPosition = (text)=>  text.toLowerCase().split("").filter((c)=>c >= "a" && c <= "z").map((c)=>c.charCodeAt(0) - 96).join(" ")

// ====================================================================================================================================

// 9 Masaalaaaaa 

// Nameeeeee : Find The Parity Outlier

// Linkiiiii : https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// Javobiiii : 
// function findOutlier(integers){
//  let juft = integers.filter((j)=>j % 2 === 0)
//  let toq = integers.filter((t)=> t % 2 !== 0)
//   if(juft.length === 1){
//     return juft[0]
//   }else{
//     return toq[0]
//   }
// }

// =================================================================================================================

// 10 Masaalaaaaa

// Nameeeeee : Convert string to camel case

// LInkiiiii : https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Javobiiiii : 
// let  toCamelCase = (str)=> {
//   let result = "";
//   let upper = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "-" || str[i] === "_") {
//       upper = true;
//     } else if (upper) {
//       result += str[i].toUpperCase();
//       upper = false;
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

// =====================================================================================

// 11 MAsaalaaaaaaa

// Nameeeeee : Multiples of 3 or 5

// Linkii : https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// Javobiiiii : 
// let solution = (number)=>  {
//   if (number < 0) return 0;

//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// =================================================================
    // 12 Masaalaaa

// Nameee : ko'p o'lchovli massivda qidiruv

// Linkiii : https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/train/javascript

// Javobiii : 
// let locate = (arr, value)=> {
//   const flatArr = arr.flat(Infinity);

//   if(flatArr.includes(value)) {
//     return true;
//   } else {
//     return false;
//   }
// }


// =============================================================================================

// 13 Masaalaaaa

// Nameeeeeee : How many permutations where indices change by at most 1

// Linkiiiii : https://www.codewars.com/kata/629e18298f2d21006516e381/train/javascript

// Javobiii : 
// let permuts = (n)=> {
//   if (n === 0) return 1n;
//   if (n === 1) return 1n;
//   if (n === 2) return 2n;

//   let a = 1n, b = 2n;
//   for (let i = 3; i <= n; i++) {
//     [a, b] = [b, a + b];
//   }
//   return b;
// }


// ==========================================================================================

// 14 Masaalaaaa

// Nameeee : Duplicate Encoder

// Linkiii : https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

// Javobiii : 