// **************************************Question 1*****************************************


// function add(num1){
//     return function(num2){
//         console.log(num1 + num2);
//     }
// }
// let innerValue1 = add(6);
// let innerValue2 = add(10);
// innerValue1(4);
// innerValue2(5);




// *************************************Question 2*****************************************


// let no_to_search = +prompt("enter the number you want to search: ");
// let arr = [];
// for (let i = 1; i <= 20; i++) {
//     let random_no = Math.round(Math.random() * 100);
//     arr.push(random_no);
// }
// let sorted_array = arr.sort(function(a,b){
//     if(a>b) {
//         return b;
//     }
//     return -1;
// })
// array_length = sorted_array.length;
// console.log("the original array is:", sorted_array);
// console.log("the number you searched for is : ", no_to_search);
// let i = 0;
// function recursion(array){
//     if (no_to_search === sorted_array[i]) {
//         return true;
//     }
//     else if(i < array_length-1){
//         i = i+1;
//         recursion();
//        }
//     else{ 
//         return;
//     }
// }
// recursion(sorted_array);
// if (recursion()==true){
//     console.log("true");
// }
// else{
//     console.log("false");
// }








// **********************************Question 3************************************

// let contentOfPara = prompt("enter your content");
// let para_element = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// function addingPara(String){
//     para_element.innerHTML = String;
//     parent.appendChild(para_element);
//     parent.insertAdjacentElement("afterbegin",para_element);
//     return para_element;
// }
// console.log(addingPara(contentOfPara));









// ********************************Question 4**************************************


// let list_content = prompt("enter list content:");
// let first_parent = document.getElementsByTagName("body")[0];
// let new_unorderd_list = document.createElement("ul");
// first_parent.appendChild(new_unorderd_list);
// first_parent.insertAdjacentElement("afterbegin",new_unorderd_list);
// let creting_list = document.createElement("li");
// function adding_content_in_list(string){
//     new_unorderd_list.appendChild(creting_list);
//     creting_list.innerHTML = string;
// }
// adding_content_in_list(list_content);




// ***********************Question 5*************************************


// let heading_1 = document.querySelector("#heading1");
// let heading_2 = document.querySelector("#heading2");
// function changes(id ,color){
//     id.style.backgroundColor = color;
// }
// changes( heading_2,'blue');




// ********************************Question 6*********************************


// localStorage.clear();  
// let object_1 = {
//     name:"Khadija",
//     age: 21,
//     phone_no:"+923272142742",
//     height:"5'3",
    
// }
// let object_2 = {
//     name:"Fizza",
//     age: 12,
//     phone_no:"86927579841",
//     height:"4'3",
   
// }
// let object_3 = {
//     name:"Alishba",
//     age: 24,
//     phone_no:"86927579841",
//     height:"5'6",
   
// }
// function saving_object(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key,new_object);
// }
// saving_object("data of Khadija",object_1);
// saving_object("data of Fizza",object_2);
// saving_object("data of Alishba",object_3);




// ****************************Question 7***********************************


// localStorage.clear();  

// let object_1 = {
//     name:"Khadija",
//     age: 21,
//     phone_no:"+9277864903761",
//     height:"5'3",
    
// }
// let object_2 = {
//     name:"Fizza",
//     age: 15,
//     phone_no:"9277864903761",
//     height:"4'3",
    
// }
// let object_3 = {
//     name:"noor Alishba",
//     age: 14,
//     phone_no:"9277864903761",
//     height:"5'6",
// }
   
// let i = 0;
//  function saving_object(key , value){
//        i = i+ 1
//         let new_object = JSON.stringify(value);
//         localStorage.setItem(key,new_object);
//         console.log("CONVERTED OBJECT  ",i," INTO STRING FORM \n\n", new_object)
//     }
// let j =0;
// (object_1)
// function retrieve(object_name){
//     j = j+1;
//     let retrieved_object = JSON.parse(localStorage.getItem(object_name));
//     console.log("CONVERTED OBJECT  ",j," INTO OBJECT FORM FROM STRING FORM \n\n", retrieved_object)
// }
// saving_object("data of Khadija",object_1);
// retrieve('data of Khadija')
// saving_object("data of Fizza",object_2);
// retrieve('data of Fizza')
// saving_object("data of Alishba",object_3);
// retrieve('data of Alishba')



// *********************************Question 8*************************************


// let stdData = {
//     name: "Khadija",
//     class: "W-M-A",
//     age: 21,
//     teacher: "Sir Ishaq",
// }
// function dataStore(){
//     let nameStoreInString = JSON.stringify(stdData.name);
//     localStorage.setItem("name" , nameStoreInString );
//     let classStoreInString = JSON.stringify(stdData.class);
//     localStorage.setItem("class" , classStoreInString );
//     let ageStoreInString = JSON.stringify(stdData.age);
//     localStorage.setItem("age" , ageStoreInString );
//     let teacherStoreInString = JSON.stringify(stdData.teacher);
//     localStorage.setItem("teacher" , teacherStoreInString );
//     let nameInConsole = localStorage.getItem("name");
//     let classInConsole = localStorage.getItem("class");
//     let ageInConsole = localStorage.getItem("age");
//     let teacherInConsole = localStorage.getItem("teacher");
//     return objInConsole = {
//         name: nameInConsole,
//         class: classInConsole,
//         age: ageInConsole,
//         teacher: teacherInConsole,
//     }
// }
// console.log(dataStore());



// *********************************Assignment Completed*************************************//