// hero text
let a=document.querySelector(".hero_p");
let text="we have everything in quality and at a low prices";
let i=0;
function func(){
    if(i<text.length){
        a.innerHTML+=text.charAt(i);
        i++;
        setTimeout(func,200);
    }
}
func();
// subscribe text
let b=document.querySelector("#subscribe_p");
let txt="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, tempora?";
let n=0;
function func2(){
    if(n<text.length){
        b.innerHTML+=txt.charAt(n);
        n++;
        setTimeout(func2,200);
    }
}
func2();