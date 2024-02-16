//javascript for sticky navbar

const nav = document.querySelector(".tabs-container");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

//javascript for qr scanner

function onScanSuccess(decodedText, decodedResult) {
  console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess); 


//javascript for reward badges

document.addEventListener("DOMContentLoaded", function () {
    const challengesContainer = document.getElementById("challenges-container");
    const challengesData = [
        { title: "Plastic-Free Week", reward: "Green Eco Badge" },
        { title: "Paper Recycling Pro", reward: "Recycler Certificate" },
        { title: "Glass Hero Challenge", reward: "10% Discount at XYZMart" },
    ]
    challengesData.forEach((challenge) => {
        const challengeCard = document.createElement("div");
        challengeCard.classList.add("challenge-card");

        const rewardBadge = document.createElement("img");
        rewardBadge.src = "green eco badge.png"; 
        rewardBadge.alt = "Reward Badge";
        rewardBadge.classList.add("reward-badge");

        const challengeTitle = document.createElement("h3");
        challengeTitle.textContent = challenge.title;

        const rewardText = document.createElement("p");
        rewardText.textContent = "Reward: " + challenge.reward;

        challengeCard.appendChild(rewardBadge);
        challengeCard.appendChild(challengeTitle);
        challengeCard.appendChild(rewardText);

        challengesContainer.appendChild(challengeCard);
    });
});

//javascript for partnerships

const corporatePartners = ["ABC Corporation", "XYZ Municipal Corporation"];
const ngoPartners = ["Green Initiative NGO", "Environmental Stewardship Organization"];

function displayPartnerships() {
    displayPartnershipCategory('corporate-list', corporatePartners);
    displayPartnershipCategory('ngo-list', ngoPartners);
}

function displayPartnershipCategory(listId, partners) {
    const partnershipList = document.getElementById(listId);
    partnershipList.innerHTML = ""; 
    partners.forEach(partner => {
        const listItem = document.createElement('li');
        listItem.innerText = partner;
        partnershipList.appendChild(listItem);
    });
}

displayPartnerships();
