
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


//coin count and alert
const coinCounter = document.getElementById("coin-number");
const callButtons = document.querySelectorAll("#call-btn");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function(e) {
        e.preventDefault();

        let coins = parseInt(coinCounter.textContent);
        const card = callButtons[i].closest(".card"); 
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;

        if (coins < 20) {
            alert("❌ You don't have enough coins to make this call.");
            return;
        }

        coins -= 20;
        coinCounter.textContent = coins;

        alert(`📞 Calling ${serviceName}: ${serviceNumber}...`);

    });
}

