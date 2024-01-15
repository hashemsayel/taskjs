
var dollar = document.querySelector(".dollar");
var dinar = document.querySelector(".dinar");

var result = document.querySelector(".result");
var submit = document.querySelector(".submit");
var button = document.querySelector(".button");
var final = document.querySelector(".final");

submit.onclick = showDollar;
button.onclick = showDinar;

function showDollar(e){


  e.preventDefault();

    result.textContent =  "dollar : " +  dollar.value / 3.75;

}



function showDinar(e){


  e.preventDefault();

    final.textContent =  "dinar : " +  dinar.value / 5.29;


}




