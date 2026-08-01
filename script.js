const PASSWORD = "112425";

const passwordPage = document.getElementById("passwordPage");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");

function checkPassword(){

const pass=document.getElementById("password").value;

if(pass===PASSWORD){

passwordPage.classList.remove("active");

envelopePage.classList.add("active");

}else{

document.getElementById("wrong").innerHTML="Wrong password baby 🥺";

}

}

function openLetter(){

const voice = document.getElementById("voice");

envelopePage.classList.remove("active");

letterPage.classList.add("active");

if(voice){

voice.play().catch(()=>{});

voice.onended = () => {

startTypewriter();

};

}else{

startTypewriter();

}

}

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["🤍","💗","💕","💖","💞"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);

const message=`YOUR MESSAGE HERE`;

let i=0;

function startTypewriter(){

const target=document.getElementById("typewriter");

if(!target)return;

target.innerHTML="";

function type(){

if(i<message.length){

target.innerHTML+=message.charAt(i);

i++;

setTimeout(type,18);

}

}

type();

}
