/*
import Test1 from "./moduletest.js";
let test1 = new Test1();
test1.getData();*/

import Test1 from "./moduletest.js";

let test1 = new Test1();

//window.loginDo = function(){
window.loginDo = () => {
    const id = $("#txt_id").val();
    const pw = $("#txt_pw").val();

    test1.login(id, pw);

};
