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