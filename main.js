
//  1 task start keys and values 

// let Objects = {name : "Azamatjon" , age : 22 , hobby:"Learning language" , gmail: "azamatergasev01@gmail.com" , phoneNumber: 906910621 ,} 


// const SaveValues = (parametr) => {
//     let Values = [] 
//     for (let key in parametr) {
//         Values.push(parametr[key])
//     }
//     // return Values  Bu orqali ozimiz yana qoshsak bo'ladi console esa korib olish uchun qilindi 
//     console.log(Values)
// }
// SaveValues(Objects)    

// const SaveKeys = (parametr) => {
//     let Keys = [] 
//     for (let key in parametr) {
//         Keys.push(key)
//     }
//     return Keys
// }
// SaveKeys(Objects)


//  1 task finished 


//  2 task array bor yoki yoq tekshiramiz 


// const number = (num) => {
//     let arr = [1 , 2, 3, 4, 9, 11, 19] 

//     if(arr.includes(num)) {
//         console.log(`arrayda berilgan sonlar ichida ${num} bor`)
//     }else{
//         console.log(`arrayda berilgan sonlar ichida ${num} yoq`)
//     }
// }

// number (19)


//  2 task finished 

//   3 task starts sozlar ichida bor yoki yuq ekani aniqladim 

// const string = () => {
//     let arr = ["olma" , "Davlat" , "Xalq" , "Dasturchi" , "Dasturlash" , "Google" , "boolean"] 
//     let word = "olcha"


//     if(arr.includes(word)) {
//         console.log(`berilgan stringlar ichida ${word} bor`)
//     }else{
//         console.log(`berilgan stringlar ichida ${word} yuq`)
//     }
// }


// string() 


//  3 tasks finished  


//  4 task starts  funksiya ichidagi nechinchi indexda ekanini topadi 


// let arr = ["Azamat" , 23, "Jasur" , "Aziz" , "Alisher"] ;


// function FindIndex (arr , element) {

//     for (let i = 0 ; i < arr.length ; i++) {
//         if (arr[i] == element) {
//             return i
//         }
//     }
//     return "Topilmadi"
// }


// console.log(FindIndex(arr , "Alisher"))

//  4 task finished 

//  5 task starts 3 ta objects ni qoshdim assign yordamida 

// const objectOne = {model : "Iphone 15 pro max"} 

// const objectTwo = {color : "Black"} 

// const objectThree = {price : "1300$"} 


// let resultObj = Object.assign ({}, objectOne, objectTwo,objectThree) ; 


// console.log(resultObj)

//  5 tasks finished 


// 6 task 2 ta sonlardan iborat bolgan obj yaratdim 


// let obj_one = {number_one :23} 
// let obj_two = {number_two :12} 

// console.log(obj_one) 
// console.log(obj_two)


//  6 task finished bu yerda 2 ta obj yaratish soralgan holos 

// 7 task starts 2 ta obj ni qoshganman 


// let obj_one = {number_one :23} 
// let obj_two = {number_two :12}
// const resultObj = Object.assign({}, obj_one, obj_two) 




// console.log(resultObj) 


//  7 tasks finished 




//  8 tasks keylarini qoshganman 


// let obj_one = {number_one :23} 
// let obj_two = {number_two :12}


// const resultObj = Object.assign({}, obj_one, obj_two) 

// let getKey = Object.keys(resultObj) 


// console.log(getKey)  


// 8 tasks finished 


// 9 taks  starts value ni qoshganman  

// let obj_one = {number_one :453} 
// let obj_two = {number_two :122}

// const resultObj = Object.assign({}, obj_one, obj_two) 

// let getValue = Object.values(resultObj) 



// console.log(getValue) 


//  9 tasks finished  




//  10 tasks starts ikkalasini yigindisini topgan 

// let obj_one = {number_one :5} 
// let obj_two = {number_two :7}

// const resultObj = Object.assign({}, obj_one, obj_two) 

// let sum = 0;
// let getValue = Object.values(resultObj) 

// for(let i = 0; i < getValue.length; i++){
//     sum += getValue[i];
// }


// console.log(sum) 

//  10 taks finished  











