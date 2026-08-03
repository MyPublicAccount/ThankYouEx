const pages = [
  {
    title: "Dear My Ex Wifey...",
    text: "I started writing this message many times. Every version sounded like anger. This one doesn't."
  },
  {
    title: "Thank You.",
    text: "Thank you for the breakup. At first, it felt like my world had quietly fallen apart."
  },
  {
    title: "The Truth",
    text: "i never did a mistake when im with u, i asked the reason, and u kept blocking,so st final i stopped askin u."
  },
  {
    title: "I Changed",
    text: "The nights became longer. The silence became louder. But little by little, pain became discipline, discipline became strength, and strength became peace."
  },
  {
    title: "Today",
    text: "I'm still learning. Still healing. Still becoming a better version of myself. Not because someone asked me to... but because I finally chose myself."
  },
  {
    title: "A Small Wish",
    text: "I hope life is kind to you. I hope your dreams find you. I hope your smile never disappears, even if I'm no longer a part of it."
  },
  {
    title: "Thank You",
    text: "Some people stay forever. Some people change us forever. Thank you for being part of my story. Goodbye, and take care."
  }
];

let current = 0;

const loader = document.getElementById("loader");
const app = document.getElementById("app");
const title = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("next");

function typeWriter(element, text, speed = 35) {
  element.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, speed);
}

function showPage() {
  title.style.opacity = 0;
  message.style.opacity = 0;

  setTimeout(() => {
    title.textContent = pages[current].title;

    typeWriter(message, pages[current].text);

    title.style.opacity = 1;
    message.style.opacity = 1;

    if (current === pages.length - 1) {
      button.textContent = "Read Again";
    } else {
      button.textContent = "Continue";
    }
  }, 300);
}

button.addEventListener("click", () => {
  current++;

  if (current >= pages.length) {
    current = 0;
  }

  showPage();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
      app.style.opacity = "1";
      showPage();
    }, 1200);
  }, 2500);

  const particles = document.getElementById("particles");

  for (let i = 0; i < 80; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDuration = (8 + Math.random() * 10) + "s";
    p.style.animationDelay = (Math.random() * 10) + "s";
    particles.appendChild(p);
  }
});
