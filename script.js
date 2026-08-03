const startScreen = document.getElementById("startScreen");
const envelopeScene = document.getElementById("envelopeScene");
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const paper = document.querySelector(".paper");
const letterScene = document.getElementById("letterScene");
const letterText = document.getElementById("letterText");
const bgMusic = document.getElementById("bgMusic");

const letter = `I don't know if this letter
will ever find you.

Maybe it isn't meant to.

But some words deserve
to exist...

even without an answer.

Once...

I thought losing you
meant losing myself.

I was wrong.

Pain slowly became
my teacher.

Silence became
my friend.

Every sleepless night
made me stronger.

Every goodbye
became another step
towards the person
I'm becoming today.

So...

Thank you.

Not because everything
ended beautifully.

But because
it changed me.

I truly hope
life gives you
every happiness
you deserve.

As for me...

I'll keep walking.

With gratitude.

Without regret.

Thank you...

Goodbye.`;

let index = 0;

async function startExperience(){

    startScreen.style.opacity = "0";

    setTimeout(()=>{
        startScreen.style.display = "none";
    },1000);

    try{

        bgMusic.volume = 1;
        await bgMusic.play();

    }catch(e){

        console.log(e);

    }

    envelopeScene.style.opacity = "1";
    envelopeScene.style.pointerEvents = "auto";

    setTimeout(openEnvelope,1800);

}

function openEnvelope(){

    flap.style.transform = "rotateX(180deg)";

    setTimeout(()=>{

        paper.style.bottom = "20px";

    },900);

    setTimeout(showLetter,3500);

}

function showLetter(){

    envelopeScene.style.opacity = "0";

    setTimeout(()=>{

        envelopeScene.style.display = "none";

        letterScene.style.opacity = "1";

        typeLetter();

    },1200);

}

function typeLetter(){

    if(index < letter.length){

        letterText.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter,55);

    }

}

startScreen.addEventListener("click",startExperience);

/* ===========================================
   CINEMATIC EFFECTS
=========================================== */

/* ---------- Rose Petals ---------- */

const roseContainer = document.getElementById("roseContainer");

function createRose(){

    const rose = document.createElement("div");

    rose.innerHTML = "🌹";

    rose.className = "rose";

    rose.style.left = Math.random()*100+"%";

    rose.style.fontSize = (16+Math.random()*12)+"px";

    rose.style.animationDuration =
    (8+Math.random()*6)+"s";

    roseContainer.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },14000);

}

setInterval(createRose,900);

/* ---------- Floating Dust ---------- */

const particles=document.getElementById("particles");

function createDust(){

    for(let i=0;i<50;i++){

        const p=document.createElement("div");

        p.className="particle";

        p.style.left=Math.random()*100+"%";

        p.style.top=Math.random()*100+"%";

        p.style.animationDuration=
        (10+Math.random()*12)+"s";

        p.style.animationDelay=
        Math.random()*6+"s";

        particles.appendChild(p);

    }

}

createDust();

/* ---------- Paper Float ---------- */

setInterval(()=>{

    const paperBox=document.getElementById("letter");

    if(!paperBox) return;

    paperBox.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-5px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:3500

    });

},3500);

/* ---------- Fade Ending ---------- */

function ending(){

    document.body.animate([

        {opacity:1},

        {opacity:0}

    ],{

        duration:4000,

        fill:"forwards"

    });

}

setTimeout(ending,95000);
