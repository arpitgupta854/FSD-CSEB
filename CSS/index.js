// console.log("hello world");
 //const div=document.getElementsByClassName("parent");
// console.log(div)
// // div[0].innerHTML="<h2 style =color:red>Hello Js</h2>";
// const h1=document.createElement("h1")
// h1.innerText="This is ABES Engineering College";
// console.log(h1)
// h1.style.backgroundColor="red";
// h1.style.padding="10px"
// h1.style.marginLeft="20px"
// div[0].append(h1)


// const img=document.createElement("img");
// img.src="./download.jpeg";
// console.log(img);
// img.style.height="300px";
// div[0].appendChild(img);
// div[0].removeChild(img);


// function getData(){
//    console.log("h1");
//    div[0].innerHTML="<h2>hello</h2>";

// }
// const button=document.getElementsByClassName("btn");
// console.log(button)
// button[0].addEventListener('click',getData)

// const promise=new Promise((resolve,reject)=>{
//     let a=12
//     if(a>12){
//         resolve("Accepted")
//     }
//     else{
//         reject("Not Accepted")
//     }
// })
// promise.then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>
//   console.log("All resourse have closed")
// )


// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"Arpit Gupta",Stack:"MERN STACK"})
// });
// promise2.then((e)=>{
//     console.log("hi,"+e.name);
// }).catch(x=>{
//     console.log(x);
// })

const response=fetch("https://dummyjson.com/products")
response.then((e)=>{
    console.log(e);
    e.json().then((res)=>{
        console.log(res);
    })
})