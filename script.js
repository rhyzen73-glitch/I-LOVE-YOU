const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const question = document.getElementById("question");
const message = document.getElementById("message");

let noCount = 0;


/* =========================
   CHRISTMAS NO MESSAGES
   ========================= */

const messages = [

    "Sure na? 🥺🎄",

    "kaysa diman musugot, iMizzyu na raba 😭",

    "Once year ra mag pasko di pagyud ka... 🤭",

    "Gapaabot si santa oh🎅",

    "Think again plezzz 😭❤️",

    "Nagka dako nana oh sumbagay ta ron👀🎄",

    "Sge na ba plz nani",

    "PLEZZZZ, IMIZZYU NA RABA mwehehhehehehe",

    "yay ka sugot na ako baby mwehehhehee😀🎄❤️"

];


/* =========================
   NO BUTTON
   ========================= */

noBtn.addEventListener("click", function () {

    noCount++;


    /* Change message */

    if (noCount <= messages.length) {

        message.textContent =
            messages[noCount - 1];

    }


    /* Make YES bigger */

    let newSize =
        18 + (noCount * 7);

    yesBtn.style.fontSize =
        newSize + "px";


    yesBtn.style.padding =
        (15 + noCount * 3) +
        "px " +
        (30 + noCount * 6) +
        "px";


    /* Make NO smaller */

    let noSize =
        Math.max(10, 18 - noCount);

    noBtn.style.fontSize =
        noSize + "px";


    /* Change question */

    if (noCount >= 4) {

        question.textContent =
            "Plizzzz say YES 🎄❤️";

    }


    /* BIG YES */

    if (noCount >= 8) {

        yesBtn.style.fontSize =
            "45px";

        yesBtn.style.padding =
            "30px 55px";

        noBtn.style.fontSize =
            "10px";

    }

});


/* =========================
   YES BUTTON
   ========================= */

yesBtn.addEventListener("click", function () {

    document.querySelector(".card").innerHTML = `

        <div class="tree">
            🎄
        </div>

        <h1 class="success">
            YAYYYYY!!! ❤️🎄
        </h1>

        <p class="success-message">
            Ay wow yez ditso! 😘💕
        </p>

        <p class="success-message">
            Lezgoooooooooo Paldoooooooooo.❤️
        </p>

        <p class="success-message">
            Merry Christmas Labidabz, IMizzyu So Much! 🎄✨
        </p>

    `;

    createSnowHearts();

});


/* =========================
   CHRISTMAS CELEBRATION
   ========================= */

function createSnowHearts() {

    const snow =
        document.querySelector(".snow");


    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add(
            "floating-heart"
        );

        heart.textContent =
            Math.random() > 0.5
            ? "❤️"
            : "🎄";


        heart.style.position =
            "absolute";


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.bottom =
            "-50px";


        heart.style.fontSize =
            (15 + Math.random() * 30) +
            "px";


        heart.style.animation =
            "heartFloat " +
            (3 + Math.random() * 4) +
            "s linear forwards";


        heart.style.animationDelay =
            Math.random() * 2 + "s";


        snow.appendChild(heart);

    }

}


/* =========================
   EXTRA ANIMATION
   ========================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes heartFloat {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 0;

    }

    20% {

        opacity: 1;

    }

    100% {

        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;

    }

}

`;

document.head.appendChild(style);