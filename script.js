
// Love count
const loveCounter = document.getElementById("love-number");
let count = parseInt(loveCounter.textContent);

const hearts = document.querySelectorAll(".fa-heart");

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function(e) {
        e.preventDefault();

        count++;
        loveCounter.innerText = count;
    });
}

