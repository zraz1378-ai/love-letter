const PASSWORD = "112425";

const passwordPage = document.getElementById("passwordPage");
const envelopePage = document.getElementById("envelopePage");
const letterPage = document.getElementById("letterPage");
const wrong = document.getElementById("wrong");

function checkPassword(){

    const input = document.getElementById("password").value;

    if(input === PASSWORD){

        passwordPage.classList.remove("active");
        envelopePage.classList.add("active");

    }else{

        wrong.innerHTML = "Wrong password baby 🥺";

    }

}

function openLetter(){

    envelopePage.classList.remove("active");
    letterPage.classList.add("active");

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

setInterval(createHeart,350);
