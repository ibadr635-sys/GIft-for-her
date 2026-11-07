const flashcards = [
  { vocab: "你好", translation: "Hello (Boring, standard)." },
  {
    vocab: "炒饭",
    translation: "Fried Rice: A myth. Has never actually been cooked for me.",
  },
  {
    vocab: "化妆",
    translation: "Ada Wong",
    image: "https://i.postimg.cc/ZKWDyyDt/ada.jpg",
  },
  { vocab: "国王", translation: "Ya boi" },
  { vocab: "公主", translation: "Currently looking at her screen smiling." },
];

let currentIndex = 0;

const cardContainer = document.getElementById("flashcard");
const vocabText = document.getElementById("vocab-text");
const translationText = document.getElementById("translation-text");
const imageContainer = document.getElementById("image-container");
const cardImage = document.getElementById("card-image");
const nextBtn = document.getElementById("next-btn");

// Handle the Card Flip
cardContainer.addEventListener("click", () => {
  cardContainer.classList.toggle("is-flipped");
});

// Handle the Next Button
nextBtn.addEventListener("click", () => {
  // If the card is flipped, flip it back first before changing content
  if (cardContainer.classList.contains("is-flipped")) {
    cardContainer.classList.remove("is-flipped");

    // Wait for the flip animation to finish (600ms) before loading the next card
    setTimeout(() => {
      loadNextCard();
    }, 600);
  } else {
    loadNextCard();
  }
});

function loadNextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  const currentCard = flashcards[currentIndex];

  vocabText.innerText = currentCard.vocab;
  translationText.innerText = currentCard.translation;

  // Handle the Image logic
  if (currentCard.image) {
    cardImage.src = currentCard.image;
    imageContainer.classList.remove("hidden");
  } else {
    imageContainer.classList.add("hidden");
  }
}
