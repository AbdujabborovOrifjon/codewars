    // Codewars  7 kyuu  masalalari 


// ========================================================================================================
// 1 Masaalaaaaaaa

// CRUD   ->  READ vazifasi  

// linki : https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

// Nomiii  :  Do'stmi yoki dushmanmi?

// Javobiii : 

// function friend(friends){
// return   friends.filter((n)=>{
//     if(n.length === 4) return n
    
//   })
// }


// =============================================================================================================

// 2 Masaalaaaa 
// CRUD -> READ  vazifasi 


// linki :  https://www.codewars.com/kata/52705ed65de62b733f000064/train/javascript

// Nomii : Saralangan obyektlar ro'yxatini qaytaring

// Javobiii :   
// function sortList (sortBy, list) {
//   return  list.sort((a, b)=> b[sortBy] - a[sortBy])
// }

// =============================================================================================================`


// 3 Masaalaaaaa


// Linkiii :    https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

// Nomiiiii :   Substring misollar sonini qaytaring

// Javobiii :
//  function solution(fullText, search) {
//   return fullText.split(search).length -1;
// }


// ===============================================================================================================

// 4 Masaalaaaaa 

// LINKIIII : https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

// Namee : Make a function that does arithmetic!

// Javobuiiii :
// function arithmetic(a, b, operator){
//   if(operator === "add"){
//     return a + b
//   }else if(operator === "subtract"){
//     return a - b
//   }else if (operator === "multiply"){
//     return a * b
//   }else if (operator === "divide"){
//      return a / b
//   }
// }

// ===============================================================================================================================

// 5 Masaalaaaaaaaa

// Nameee :     How many consecutive numbers are needed?

// Linkiii : https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

// Javobiiii :
// function consecutive(arr) {
//   let min = Math.min(...arr)
//   let max = Math.max(...arr)
  
//     let cont = []
    
//   for(let i = min; i <= max; i++) cont.push(i)
  
//   return (cont.length - arr.length)
// }

// ===========================================================================================================================

// 6 Masaallaa

// Namee : Ok funksiyalari bilan saralash

// linki : https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript

// javobiii : let OrderPeople =(people)=>  people.sort((a, b)=> a.age - b.age)



// ================================================================================================================================

// 7 masaalaaa 

// Name :  Ular kvadratmi?

// linki : https://www.codewars.com/kata/56853c44b295170b73000007/train/javascript

// javobiii : let isSquare = arr => arr.length ? arr.map ((x) => !`${(Math.sqrt(x) % 1)}`.includes(".")).every((v) => v) : undefined;


// =============================================================================================================================== 

// 8 Masaaaalaaa

// Namee : Highest and Lowest


// Linki : https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// Javobii : 
// function highAndLow(numbers) {
//   const arr = numbers.split(' ').map(Number);
//   return `${Math.max(...arr)} ${Math.min(...arr)}`;
// }
// ===================================================================================================================================

// 9 masaalaaaa 

// Nameee :     List Filtering

// Linkiiiiii : https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// Javoobiii : let filter_list = (l)=>    l.filter((i)=> typeof i !== "string")


// =============================================================================================================================

// 10 Masaalaa 

// Nameee : You're a square!

// Linkiiii : https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// Javoobiiiii : 
// var isSquare = function(n) {
//   if (n < 0) return false;
//   return Number.isInteger(Math.sqrt(n));
// };


// ====================================================================================================================

// 11 Masaaalaaaaaa

// Nameeeeeee : Vowel Count

// Linkiiiii : https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Javobiii :  let getCount = (str)=>  str.toLowerCase().split("").filter(c => "aeiou".includes(c)).length;

// ======================================================================================================================

// 12 Masaalaaaa 

//  Nameeeeeeee : Square Every Digit

// Linkiiii : https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// Javobiiiii : let squareDigits = (num)=> Number(num.toString().split("").map((d)=>d*d).join(''))

// =======================================================================================================================

// 13 Masaalaaaaaaaa 

// Nameeeee : String ends with?

// Linkiiiiii : https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// Javobiiiiiiii : 
// let solution = (str, ending)=> {
//  if(str.endsWith(ending)){
//    return true
//  }else{
//    return false
//  }
// }

// ======================================================================================================================================

// 14 Masaalaaaaa

// Nameeeeeeeee : Shortest Word

// Linkiiii : https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Javoobiiiii : let findShort = (s)=> Math.min(...s.split(" ").map((w)=>w.length))

// ======================================================================================================================================

// 15 Masaalaaaaaa

// Nameeeeeeeee : Sort Numbers

// Linkiiiiiii : https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

// Javobiiiii : 
// let solution = (nums)=> {
//   if(!Array.isArray(nums)) return []
  
//  return  nums.sort((a,b)=>a-b)
// }



// ======================================================================================

// 16 Masaalaaaaaaa 

// Nameeeee : What is type of variable?

// Linkiiiiiii : https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript

// Javobiiiii : 
// function type(value) {
//   if(typeof value == "object"){
//     if(Array.isArray(value)) return "array";
//     if(value == null) return "null";
//     if(isFinite(value)) return "date";
//     return "object";
// }
//   return typeof value;
// }

// ========================================================

// 17 Masaalaaaa

// Nameee : Words to sentence

// Linkiii : https://www.codewars.com/kata/57a06005cf1fa5fbd5000216/train/javascript

// Javobiii : let wordsToSentence = (words)=>  words.join(" ")

// ================================================================

// 18 Masalaaaa 

// Nameeeee : 4 ning kuchi

// Linkiii : https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript

// Javobiiiiiiiiiiiiiiiii : 
// function powerOf4(n) {
//   if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
//     return false;
//   }
//   return (n & (n - 1)) === 0 && n % 3 === 1;
// }

// ==========================================================================================================

// 19 Masaalaaa

// Nameeeee : Descending Order

// Linkiii : https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// Javobii : let descendingOrder = (n)=> Number(n.toString().split("").sort((a,b)=> b-a).join(""))

// =======================================================================================================

// 19 Masaalaaaaa 

// Nameee : Sum of two lowest positive integers

// Linkii : https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Javobiii : let  sumTwoSmallestNumbers = (numbers)=>numbers.sort((a, b) => a - b).slice(0, 2) .reduce((a, b) => a + b);

// ============================================================================================================

// 20 Masaalaaaaa

// Nameeeeeeee : Exes and Ohs

// Linkiiiii : https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Javobiiii : 
// let  XO = (str)=>  {
//   str = str.toLowerCase();
//   let x = 0;
//   let o = 0;
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === "x") x++
//     else if(str[i] === "o") o++
//   }
//   return x === o
// }

// ================================================================================================

// 21 Masaalaaaaa

// Nameee: Binary Addition

// Linkii : https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

// Javobii : let  addBinary = (a,b)=>(a + b).toString(2)

// ================================================================================================

// 22 Masaaalaaa 

// Nameeeee : Boshlang'ich seriya #3 Sonlar yig'indisi

// Linkiii : https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

// Javobiii : 
// let  getSum = (a, b)=> {
//   let min = Math.min(a, b);
//   let max = Math.max(b, a);
//   let sum = 0
//   for(let i = min; i <= max; i++){
//     sum += i
//   }
//   return sum
// }

// =====================================================================

// 23 Masaalaaaa

// Nameeeee : Get the Middle Character

// Linkiii : https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript


// Javobiiii : 
// let  getMiddle = (str)=>  {
//   const len = str.length;
//   const mid = Math.floor(len / 2);
//   if (len % 2 === 1) {
//     return str[mid];
//   }
//   return str[mid - 1] + str[mid];
// }


// ================================================================================================
    // 24 Masalaaaa
// Nameeee : Mumbling

// Linkii : https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// Javobii : let accum = (s)=> s.split("").map((e, i)=> e.toUpperCase() + e.toLowerCase().repeat(i)).join("-")

// ========================================================================================================