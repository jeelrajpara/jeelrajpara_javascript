// var myObj={
//     education:[
//         college={
//             college:'socet',
//             year:'first',
//         },
//         [
//             "B.tech","SOU","first-year",
//             {
//                 branch:'computer engineering',
//             },
//         ],
//             {
//                school:'IJSC',
//                standard:12,
//             },
//           "stream","science"
//         ]
// }
// // console.log(myObj);
// // console.log(myObj.education[3]);
// console.log(myObj.education[0]);


// const myName={
//     "my first name":"Jeel",
//     "my last name":" Rajpara",
// }
// console.log(myName["my first name"]);
// console.log(myName["my first name"]+ myName["my last name"])


// const arry1=['hello','world',1,2,3,4];
// let arry2=[,1,2,3,4,5];
// console.log(arry1+arry2);



// const arry1=[
//     "education",'collge','degree',
//     [
//        arry2=[
//         1,2,3,4,5
//        ]
//     ]
// ]
// // console.log(arry1);
// // console.log(arry2);
// console.log(arry1+arry2);


// let myObj={
//     education:"MBBS",
//     speciality:' physio',
//     arry1:[" B J Medical","5th year"]  
// }
// console.log(myObj.education);
// console.log(myObj.education+myObj.speciality);
// console.log(myObj.education+myObj.arry1);


// let obj={
//     age:18,
// }
// let obj2=Object.assign({},obj)
// obj2.age=19;
// console.log(obj);
// console.log(obj2);


// const myObj = {
//     fname: 'Jeel',
//     lname: ' Rajpara',
//     education: ["B.tech", '1st year'],
//     hobbies: {
//         outdoor: ["skating", 'dancing', 'badminton',
//              {
//                 "couching taken":"yes",
//              },
//              1,2,3,4,5
//         ],
//         indoor:"playing music",
//     }
// }
// // console.log(myObj);
// // console.log(myObj.fname);
// // console.log(myObj.fname+myObj.lname);
// // console.log(myObj.education);
// // console.log(myObj.hobbies);
// console.log(myObj.hobbies.outdoor[3]);



//call by value  with primitive data type
// var x=7;
// var y=x;
// y=15;
// x=30;
// console.log(x);
// console.log(y);


//call by reference with non primitive data type

// const myObj={
//     name:"jeel",
//     UID:114,
// }
// let myObj2=myObj;
// myObj2={
//     name:"hello",
// }
// console.log(myObj);
// console.log(myObj2);

// var arry=[1,2,3,4,5];
// var arry2=arry;
// arry2[2]=7887;
// console.log(arry);
// console.log(arry2);

console.log(+1);
console.log(+"");
console.log(+"hello");
console.log(+true);
console.log(+false);