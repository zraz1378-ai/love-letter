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


let i = 0;

function startTypewriter(){

const target = document.getElementById("typewriter");

if(!target) return;

target.innerHTML = "";
i = 0;

function type(){

    if(i < message.length){

        if(message.charAt(i) === "\n"){
            target.innerHTML += "<br>";
        }else{
            target.innerHTML += message.charAt(i);
        }

        i++;
        target.scrollIntoView({behavior:"smooth", block:"end"});
        setTimeout(type,18);

    }else{

        document.getElementById("songSection").style.display = "block";

    }

}
type();

}
function playOurSong(){

    const answer = confirm(
        "🤍 One last thing...\n\nClose your eyes, think about us, then press OK."
    );

    if(answer){

        window.open(
            "https://youtu.be/5HZ9qeFjhYk?si=wIFP4XzI9C1SlxJ5",
            "_blank"
        );

    }

}
