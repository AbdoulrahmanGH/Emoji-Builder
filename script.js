let emoji = document.querySelector(".emoji");

let allEmojiColors = ["#eb4034","#8cff00","#007bff","#f700ff","#FFD700"];

let eyes = document.querySelector(".eyes");
let eyebrows = document.querySelector(".eyebrows");
let mouth = document.querySelector(".mouth");

let colorbtn = document.getElementById("Color");
let eyesbtn = document.getElementById("Eyes");
let eyesbrowsbtn = document.getElementById("Eyebrow");
let mouthbtn = document.getElementById("Mouth");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

let totalCounts = {
    eyeCount: 5,
    eyebrowsCount: 4,
    mouthCount: 5,
};

colorbtn.addEventListener("click", () => { 
    emoji.style.backgroundColor = allEmojiColors[counter1];
    counter1 = counter1 < allEmojiColors.length - 1 ? counter1
    +1 : 0;
});

eyesbtn.addEventListener("click", () => {
    eyes.setAttribute("src", `eye-${counter2}.svg`);
    counter2 = counter2 <totalCounts.eyeCount -1?
    counter2 + 1 :0;
});

eyesbrowsbtn.addEventListener("click", () => {
    eyebrows.setAttribute("src", `eyebrow-${counter3}.svg`);
    counter3 = counter3 <totalCounts.eyebrowsCount -1?
    counter3 + 1 :0;
});

mouthbtn.addEventListener("click", () => {
    mouth.setAttribute("src", `mouth-${counter4}.svg`);
    counter4 = counter4 <totalCounts.mouthCount -1?
    counter4 + 1 :0;
});