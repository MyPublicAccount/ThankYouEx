/* ===========================================
   THANK YOU EX
   SCRIPT PART 1
=========================================== */

const intro = document.getElementById("intro");
const introLine = document.getElementById("introLine");

const story = document.getElementById("story");

const title = document.getElementById("title");
const message = document.getElementById("message");

const heart = document.getElementById("heart");

const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");
const restartBtn = document.getElementById("restartBtn");

const roseContainer = document.getElementById("roseContainer");
const particles = document.getElementById("particles");

const introTexts = [

"Some stories never really end...",

"They simply become the reason we grow."

];

const storyPages = [

{
title:"Dear My Ex Wifey...",
text:"I never thought silence could teach me more than words ever did."
},

{
title:"Thank You.",
text:"Thank you for every goodbye. Every tear became another lesson."
},

{
title:"The Pain",
text:"There were nights when sleep never came, only memories did."
},

{
title:"The Change",
text:"Slowly I stopped asking why. I started asking who I wanted to become."
},

{
title:"Today",
text:"I smile differently now. Not because everything is perfect... but because I finally found peace within myself."
},

{
title:"My Wish",
text:"I genuinely hope life gives you every happiness you once searched for."
},

{
title:"Goodbye",
text:"Some people stay forever. Some people change us forever. Thank you for being part of my story."
}

];

let page = 0;

function sleep(ms){

return new Promise(resolve=>setTimeout(resolve,ms));

}

async function typeWriter(element,text,speed=45){

element.innerHTML="";

for(let i=0;i<text.length;i++){

element.innerHTML+=text.charAt(i);

await sleep(speed);

}

}

async function showStory(){

story.style.opacity=1;

for(page=0;page<storyPages.length;page++){

title.classList.remove("fadeIn");

message.classList.remove("fadeIn");

await sleep(200);

title.innerHTML=storyPages[page].title;

await typeWriter(message,storyPages[page].text);

title.classList.add("fadeIn");

message.classList.add("fadeIn");

if(page===2){

heart.classList.add("breakHeart");

}

await sleep(5000);

}

title.innerHTML="Thank You.";

message.innerHTML="Take care. Goodbye ❤️";

}

async function startIntro(){

for(let i=0;i<introTexts.length;i++){

introLine.innerHTML="";

await typeWriter(introLine,introTexts[i],55);

await sleep(2600);

}

intro.style.opacity=0;

await sleep(1800);

intro.style.display="none";

showStory();

}

window.onload=()=>{

startIntro();

};

/* ===========================================
   THANK YOU EX
   SCRIPT PART 2
=========================================== */

/* ---------- Music ---------- */

async function playMusic() {
    if (!bgMusic) return;

    bgMusic.loop = true;
    bgMusic.volume = 1.0;

    try {
        await bgMusic.play();
        musicBtn.innerHTML = "🔊 Music";
    } catch (e) {
        console.log("Autoplay blocked until user interaction.");
    }
}

document.addEventListener(
    "click",
    () => {
        playMusic();
    },
    { once: true }
);

musicBtn.onclick = async () => {

    if (bgMusic.paused) {

        await playMusic();

    } else {

        bgMusic.pause();

        musicBtn.innerHTML = "🔇 Music";

    }

};

/* ---------- Replay ---------- */

restartBtn.onclick = () => {

    location.reload();

};

/* ---------- Floating Particles ---------- */

function createParticles() {

    for (let i = 0; i < 90; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "%";

        p.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        p.style.animationDelay =
            Math.random() * 8 + "s";

        particles.appendChild(p);

    }

}

createParticles();

/* ---------- Rose Petals ---------- */

function createRose() {

    const rose = document.createElement("div");

    rose.className = "rose";

    rose.innerHTML = "🌹";

    rose.style.left = Math.random() * 100 + "%";

    rose.style.animationDuration =
        (7 + Math.random() * 6) + "s";

    rose.style.fontSize =
        (18 + Math.random() * 14) + "px";

    roseContainer.appendChild(rose);

    setTimeout(() => {

        rose.remove();

    }, 13000);

}

setInterval(createRose, 900);

/* ---------- Shooting Stars ---------- */

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shootingStar";

    star.style.top = Math.random() * 35 + "%";

    star.style.left = "-200px";

    document
        .getElementById("background")
        .appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 3000);

}

setInterval(shootingStar, 7000);

/* ---------- Heart Pulse ---------- */

setInterval(() => {

    heart.style.transform = "scale(1.18)";

    setTimeout(() => {

        heart.style.transform = "scale(1)";

    }, 300);

}, 1800);

/* ---------- Resume Music ---------- */

document.addEventListener("visibilitychange", () => {

    if (!document.hidden && bgMusic.paused) {

        playMusic();

    }

});

/* ---------- Ending ---------- */

async function endingScene() {

    await sleep(3000);

    title.innerHTML = "Thank You.";

    await typeWriter(
        message,
        "Every ending quietly becomes the beginning of someone stronger."
    );

    await sleep(5000);

    title.innerHTML = "Goodbye.";

    message.innerHTML =
        "Made with ❤️ by <b>@ChinnuXbio</b>";

}

setTimeout(endingScene, 47000);
