const on = document.getElementById("on");
const off = document.getElementById("off");

const glowBulb = document.getElementById("onBulb");
const dimBulb = document.getElementById("offBulb");

const l1 = document.querySelector("#onBulb");
const l2 = document.querySelector("#offBulb");

on.addEventListener("click", ()=>{
    glowBulb.style.visibility = "visible";
    dimBulb.style.visibility = "hidden";

});
off.addEventListener("click", () =>{
    glowBulb.style.visibility = "hidden";
    dimBulb.style.visibility = "visible";
});