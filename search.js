//Search bar

//Create vars
const inputArea = document.getElementById("search");
const resultList = document.getElementById("list");
const characterCards = Array.from(document.querySelectorAll(".outer-card"));

//Add event listeners
inputArea.addEventListener("input", function () {
  const query = inputArea.value.toLowerCase();
  resultList.innerHTML = "";

  if (query) {
    const filteredCharacters = characterCards.filter((card) => {
      return card.querySelector("h4").innerText.toLowerCase().includes(query);
    });

    filteredCharacters.forEach((card) => {
      const characterName = card.querySelector("h4").innerText;
      const li = document.createElement("li");
      li.innerText = characterName;

      li.addEventListener("click", () => {
        characterCards.forEach((c) => {
          c.style.display = "none";
        });
        const characterCard = characterCards.find(
          (c) => c.dataset.character === characterName
        );

        if (characterCard) {
          characterCard.style.display = "block";
        }
        resultList.style.display = "none";
      });

      resultList.style.display = "block";
      resultList.appendChild(li);
    });
  } else {
    characterCards.forEach((c) => {
      c.style.display = "block";
    });
  }
});
