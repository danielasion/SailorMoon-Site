//Dynamic Char Pages
const allMyCharacters = [
  {
    name: "Sailor Moon",
    image: "/images/sailor_moon_full.png",
    description:
      "I am Sailor Moon, a kind-hearted crime fighter who protects Earth from evil and fights for love and justice.",
    likes: "Video games, napping, eating snacks",
    dislikes: "School, waking up early",
    from: "The Moon Kingdom, reincarnated on Earth",
  },
  {
    name: "Sailor Mars",
    image: "/images/sailor_mars_full.png",
    description:
      "I am Sailor Mars, a passionate warrior who defends Earth with my spiritual powers and determination.",
    likes: "Meditation, reading, spicy food, protecting others",
    dislikes: "Disrespect, laziness, dishonesty",
    from: "Mars, reincarnated on Earth",
  },
  {
    name: "Sailor Venus",
    image: "/images/sailor_venus_full.png",
    description:
      "I am Sailor Venus, a confident and spirited fighter who uses my love and strength to protect the world from evil.",
    likes: "Fashion, romance, cats, justice",
    dislikes: "Being underestimated, failure, evil",
    from: "Venus, reincarnated on Earth",
  },
  {
    name: "Sailor Mercury",
    image: "/images/sailor_mercury_full.png",
    description:
      "I am Sailor Mercury, an intelligent and resourceful warrior who uses my knowledge and analytical skills to protect Earth.",
    likes: "Reading, studying, puzzles, technology",
    dislikes: "Ignorance, cruelty, failure",
    from: "Mercury, reincarnated on Earth",
  },
  {
    name: "Sailor Jupiter",
    image: "/images/sailor_jupiter_full.png",
    description:
      "I am Sailor Jupiter, a strong and dependable warrior with a fierce sense of justice and a love for nature and cooking.",
    likes: "Gardening, cooking, martial arts, protecting others",
    dislikes: "Bullies, dishonesty, injustice",
    from: "Jupiter, reincarnated on Earth",
  },
  {
    name: "Sailor Neptune",
    image: "/images/sailor_neptune_full.png",
    description:
    "I am Sailor Neptune, a calm and elegant warrior with the power of the ocean, dedicated to protecting the world from darkness.",
    likes: "Music, art, beauty, the ocean",
    dislikes: "Disruption of peace, injustice, unnecessary conflict",
    from: "Neptune, reincarnated on Earth",
  },
  {
    name: "Sailor Uranus",
    image: "/images/sailor_uranus_full.png",
    description:
      "I am Sailor Uranus, a bold and determined warrior with the power of the wind, always ready to protect Earth, no matter the cost.",
    likes: "Speed, adventure, racing, protecting loved ones",
    dislikes: "Weakness, being controlled, dishonesty",
    from: "Uranus, reincarnated on Earth",
  },
  {
    name: "Tuxedo Mask",
    image: "/images/tuxedo_mask_full.png",
    description:
      "I am Tuxedo Mask, a mysterious and chivalrous protector who aids Sailor Moon in her fight against evil, with a heart full of love and justice.",
    likes: "Helping others, roses, protecting Sailor Moon",
    dislikes: "Evil, injustice, seeing others suffer",
    from: "Unknown, reincarnated on Earth",
  },
  {
    name: "Zoisite",
    image: "/images/zoisite_full.png",
    description: "I am Zoisite, a cunning and ambitious warrior serving under Queen Beryl, using my powers to defeat the Sailor Scouts and claim the Silver Crystal.",
    likes: "Power, manipulating others, beauty",
    dislikes: "Defeat, weakness, being outsmarted",
    from: "The Dark Kingdom",
  },
  {
    name: "Queen Serenity",
    image: "/images/queen_serenity_full.png",
    description: "I am Queen Serenity, the wise and compassionate ruler of the Moon Kingdom, who sacrificed everything to protect my people and the Silver Crystal.",
    likes: "Peace, justice, the well-being of her people",
    dislikes: "Darkness, evil, harm to the innocent",
    from: "The Moon Kingdom",
  },
  {
    name: "Molly Baker",
    image: "/images/molly_baker_full.png",
    description: "I am Molly Baker, a kind-hearted and loyal friend who cares deeply for Usagi and always supports her, even when things get tough.",
    likes: "Friendship, supporting Usagi, sweets",
    dislikes: "Seeing her friends in danger, cruelty, loneliness",
    from: "Earth",
  },
  {
    name: "Luna",
    image: "/images/luna_full.png",
    description: "I am Luna, a wise and nurturing guardian cat who watches over Usagi and her friends. I guide them with my wisdom and try to help them unlock their true potential as Sailor Scouts.",
    likes: "Helping the Sailor Scouts, teaching Usagi, napping in the sun",
    dislikes: "Seeing the Scouts struggle, being ignored, disrespect",
    from: "The Moon Kingdom",

  },
];

//listen for when the dom contents loaded, then if then run for loop but I need 'DOMContentLoaded' explained. Is this an event listener like click?
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html")) {
    //for loop. for each card when it is clicked, myCharacterName will get whichever card was
    //clicked by 'data-character' attribute. window.location.href changes current URL
    //to sailormoon.html .
    document.querySelectorAll(".outer-card").forEach((card) => {
      card.addEventListener("click", () => {
        const myCharacterName = card.getAttribute("data-character");
        window.location.href = `sailormoon.html?name=${encodeURIComponent(
          myCharacterName
        )}`;
      });
    });
  }

  //If we are on the sailormoon.html file, then the function getQueryParameter will
  //take name (name is the parameter of the getQueryParameter function. When you call this function, you will pass in a string that corresponds to the
  //key of the query parameter you want to retrieve.)
  //inside the func, use URLSearchParams API to look for the query parameter.
  //urlParams.get(name) returns the value associated with the name query parameter in the URL
  //If URL is sailormoon.html?name=Sailor%20Moon, this will return 'Sailor Moon'
  //to get URL in JavaScript, use properties of the window object, which we did above.

  if (window.location.pathname.endsWith("sailormoon.html")) {
    function getQueryParameter(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }

    //when you call getQueryParameter('name'), we are passing the string 'name' to the function getQueryParameter(name)
    //which tells function to look for a query parameter with the key name in the URL (like ?name=Sailor%20Moon
    //
    const myCharacterName = getQueryParameter("name");
    const character = allMyCharacters.find((c) => c.name === myCharacterName);

    // Getting the character card elements from html file and assigning them to var so we can use in this js file.
    const characterNameElement = document.getElementById("character-name");
    const characterImageElement = document.getElementById("character-image");
    const characterDescriptionElement = document.getElementById(
      "character-description"
    );
    const characterLikesElement = document.getElementById("character-likes");
    const characterDislikesElement =
      document.getElementById("character-dislikes");
    const characterFromElement = document.getElementById("character-from");

    //if the character exists (allMyCharacters.find(c => c.name === myCharacterName);) then the text for characterNameElement will be
    //set to chartacter.name, which is is the card that was clicked (AKA the character).name which is the first property of the object array allMyCharacters.
    //Similar process for the other two variables.
    if (character) {
      // Fill the card with character data
      characterNameElement.textContent = character.name;
      characterImageElement.src = character.image;
      characterDescriptionElement.textContent = character.description;
      characterLikesElement.textContent = character.likes;
      characterDislikesElement.textContent = character.dislikes;
      characterFromElement.textContent = character.from;
    } else {
      characterDescriptionElement.textContent = "Character not found.";
    }
  }
});
