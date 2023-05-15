/*
import Test1 from "./moduletest.js";
let test1 = new Test1();
test1.getData();*/

import Test1 from "./moduletest.js";

let test1 = new Test1();
/*function getUser(){
    alert("getUser");
    test1.getData();
}

function regiUser(){
    alert("regiUser");
    test1.regiData();
}

function updateUser(){

}

window.getUser = () =>{
    test1.getData();
}

window.loginUser = () =>{
    $("#txt_id").val();
    $("#txt_pw").val();
}*/

//test1.login();
console.log("return : "+localStorage.getItem("token"));