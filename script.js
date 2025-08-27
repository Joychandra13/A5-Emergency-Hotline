
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
const callHistory = document.getElementById("call-history");


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

        // local time
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit'});

        //call history design
        const entry = document.createElement("div");
        entry.classList.add(
            "flex", "justify-between", "items-center", 
            "bg-[#FAFAFA]", "rounded-lg", "p-3", "mb-2"
        );
        entry.innerHTML = `
            <div>
                <p class="font-semibold text-lg">${serviceName}</p>
                <p class="text-gray-500 text-lg">${serviceNumber}</p>
            </div>
            <div class="text-gray-400 text-lg">${timeString}</div>
        `;
        callHistory.appendChild(entry);

    });
}

// Clear History
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function() {
    callHistory.innerHTML = "";
});


//copy count, copy alert and copy number
const copyCounter = document.getElementById("copy-number");
let copycount = parseInt(copyCounter.textContent);

const copyBtns = document.querySelectorAll("#copy-btn");

for (let i = 0; i < copyBtns.length; i++) {
    copyBtns[i].addEventListener('click', function(e) {
        e.preventDefault();

        copycount++;
        copyCounter.innerText = copycount;

        const card = copyBtns[i].closest(".card");
        const serviceNumber = card.querySelector(".service-number").innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`${serviceNumber} Service Number has been copied!`);
            })
            .catch(err => {
                console.error("Failed to copy!", err);
            });
    });
}
