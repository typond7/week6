let wrapperEle= document.body.querySelector(".looper");
let damage =0 ;
let attacks ={'fire':3, 'ice':1,'poison':4}
//while condition will go until the condition is false
function renderList(){
    wrapperEle.innerHTML='';
    makeElement("Dragon Damage:"+ damage,"red");
    if (damage > 9){
        makeElement("You win!!","green");
    }
}




function makeElement(name, color) {
    let ele = document.createElement("div");
    ele.innerHTML = name;
    ele.style.color = color;
    wrapperEle.appendChild(ele);

}

renderList();

function attackdragon(attack){
    damage += attacks[attack];
}

document.body.querySelector('.fire').addEventListener("click",function(){
   attackdragon("fire");
    renderList() ;
})
document.body.querySelector(".ice").addEventListener("click",function(){
    attackdragon("ice");
    renderList() ;
})
document.body.querySelector(".poison").addEventListener("click",function(){
    attackdragon("poison");
    renderList() ;
})
