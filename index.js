/*
import Test1 from "./moduletest.js";
let test1 = new Test1();
test1.getData();*/

import Test1 from "./moduletest.js";

let test1 = new Test1();

$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});

//window.loginDo = function(){
window.loginDo = () => {
    const id = $("#txt_id").val();
    const pw = $("#txt_pw").val();

    test1.login(id, pw);

};

window.authToken = () => {
    const id = $("#txt_id").val();
    const pw = $("#txt_pw").val();
    const token = $("#txt_token").val();

    test1.authToken(token);

};
