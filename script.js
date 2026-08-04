/* ===========================================
   One Last Letter
   script.js - Part 1
=========================================== */

const startScreen = document.getElementById("startScreen");
const envelopeScene = document.getElementById("envelopeScene");

const envelopeImg = document.getElementById("envelopeImg");
const paperImg = document.getElementById("paperImg");
const seal = document.getElementById("seal");

const letterScene = document.getElementById("letterScene");
const letterText = document.getElementById("letterText");

const bgMusic = document.getElementById("bgMusic");

const restartBtn = document.getElementById("restartBtn");

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
let started = false;
