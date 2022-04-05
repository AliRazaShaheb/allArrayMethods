console.clear();
import { myarr } from "./myarr";
const mynum = [1, 2, 3, 4, 5, 4];

// //**** *for loop (old)
// let data = [];
// for (let i = 0; i < myarr.length; i++) { // this technique is bad for itirating
//   data.push(myarr[i]);
// }
// console.log(data);

//q: gettting 10,20,30,40,50
// note: this method is good for creating numbers not itirating(as mentioned above)
// for(let count = 10; count<=50; count+=10){
//   console.log(count)
// }

//**** */ for-in loop (getting index only) (old)
//note: good for itirating
// for(let i in myarr){
//   // console.log(i) // getting index
//   console.log(myarr[i]) // getting data with index
// }

//**** */ for-of loop (getting index only)(es6 new)
//note: best for itirating
// for(let obj of myarr){
//   console.log(obj) // got data
//   // same as above for-in code (console.log(myarr[i]))
// }

//breaking the loop(for-of)
// for(let obj of myarr){
//   if(obj.name === "mobile"){
//     break
//   }
//   console.log(obj)
// }

// async await exmaple
// const getObj = (obj) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(obj);
//     }, 1000);
//   });
// };

// const dataAsync = async () => {
//   for (let obj of myarr) {
//     console.log(await getObj(obj))
//   }
// };

// dataAsync();

//*** */ for each method
// get index & value together in one method
// you cant break the loop
// it is not compitable with async await
// myarr.forEach((val,idx)=>{
// console.log(val)
// console.log(idx)
// })

//destructuring method

// const copyOfmynum = [...mynum, 6];

//part of array
// const [first, second, ...rest] = mynum

//array of objects
// if copyofObjArr is changed then original objArr is also changed
// only reference is created during copy
// const objArr = [{name:"ali", age:30}, {name:"shams", age:29}]
// const copyOfObjArr = [...objArr, {name:"abdul", age:25}]
// copyOfObjArr[0].name = "Razia"
// console.log(objArr);

console.log(mynum.indexOf(4));
