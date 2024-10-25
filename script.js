//Dynamic Char Pages
const allMyCharacters = [
  {
    name: "Sailor Moon",
    image: "/images/sailor_moon_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Mars",
    image: "/images/sailor_mars_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Venus",
    image: "/images/sailor_venus_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Mercury",
    image: "/images/sailor_mercury_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Jupiter",
    image: "/images/sailor_jupiter_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Neptune",
    image: "/images/sailor_neptune_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Sailor Uranus",
    image: "/images/sailor_uranus_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Tuxedo Mask",
    image: "/images/tuxedo_mask_full.png",
    description:
      "I am Sailor Moon, a kind-hearted high schooler, meets Luna, a talking cat who reveals that Usagi is actually Sailor Moon",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Zoisite",
    image: "/images/zoisite_full.png",
    description: "I am Sailor Mars",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Queen Serenity",
    image: "/images/queen_serenity_full.png",
    description: "I am Sailor Venus",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Molly Baker",
    image: "/images/molly_baker_full.png",
    description: "I am Sailor Mercury",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
    from: "The Moon Kingdom",
  },
  {
    name: "Luna",
    image: "/images/luna_full.png",
    description: "I am Sailor Jupiter",
    likes: "video games, eating, sleeping",
    dislikes: "School, working",
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
