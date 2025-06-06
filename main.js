document.addEventListener("DOMContentLoaded", () => {
  // 1. Create an array of game objects
  // Each object contains: title, imageURL, and price
  const games = [
    {
      title: "Fantasy Warrior",
      imageURL: "https://images.pexels.com/photos/5709669/pexels-photo-5709669.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 39.99
    },
    {
      title: "Space Explorer",
      imageURL: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 49.99
    },
    {
      title: "Cyber City Racer",
      imageURL: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
      price: 29.99
    },
    {
      title: "The Legend of Zelda",
      imageURL: "https://images.pexels.com/photos/28350212/pexels-photo-28350212.jpeg",
      price: 59.99
    },
    {
      title: "Super Mario Odyssey",
      imageURL: "https://images.pexels.com/photos/14823949/pexels-photo-14823949.jpeg?auto=compress&cs=tinysrgb&w=1200",
      price: 59.99
    },
    {
      title: "Mario Kart Deluxe",
      imageURL: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1200",
      price: 49.99
    },
    {
      title: "Mario Party Bash",
      imageURL: "https://images.pexels.com/photos/17122728/pexels-photo-17122728/free-photo-of-a-nintendo-switch-and-a-bunch-of-super-mario-game-items.jpeg?auto=compress&cs=tinysrgb&w=1200",
      price: 39.99
    },
    {
      title: "Sonic Speed Rush",
      imageURL: "https://images.pexels.com/photos/399636/pexels-photo-399636.jpeg?auto=compress&cs=tinysrgb&w=1200",
      price: 44.99
    }
  ];

  // 2. Initialize an empty shopping cart array
  const cart = [];

  // 3. Get references to cart display elements in the HTML
  const cartContainer = document.getElementById("cart-container");
  const totalPriceDisplay = document.getElementById("total-price");

  // Added references for cart icon elements
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");
  const cartDropdown = document.getElementById("cart-dropdown");

  // 4. Define a function to update the cart display
  function updateCart() {
    // Clear the cart display area
    cartContainer.innerHTML = "";

    // Calculate total price
    let total = 0;

    // Loop through the cart array and display each item
    cart.forEach((item) => {
      const itemElement = document.createElement("p");
      itemElement.textContent = `${item.title} - $${item.price.toFixed(2)}`;
      cartContainer.appendChild(itemElement);
      total += item.price;
    });

    // Show total price
    totalPriceDisplay.textContent = `Total: $${total.toFixed(2)}`;

    // Update cart count on the icon
    cartCount.textContent = cart.length;
  }

  // 5. Get a reference to the HTML container for the game cards
  const gameContainer = document.getElementById("game-container");

  // 6. Loop through the game array and create UI for each game
  games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    const img = document.createElement("img");
    img.src = game.imageURL;
    img.alt = game.title;

    const title = document.createElement("h3");
    title.textContent = game.title;

    const price = document.createElement("p");
    price.textContent = `$${game.price.toFixed(2)}`;

    const addButton = document.createElement("button");
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => {
      cart.push(game);
      updateCart();
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addButton);

    gameContainer.appendChild(card);
  });

  // 7. Add event listener to cart icon to toggle dropdown
  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to document
    cartDropdown.classList.toggle("hidden");
  });

  // 8. Add event listener to document to close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target)) {
      cartDropdown.classList.add("hidden");
    }
  });

  // Initialize the cart count and dropdown (hidden initially)
  updateCart();
  cartDropdown.classList.add("hidden");
});



// document.addEventListener("DOMContentLoaded", () => {
//   // 1. Create an array of game objects
//   // Each object contains: title, imageURL, and price
//   const games = [
//     {
//       title: "Fantasy Warrior",
//       imageURL: "https://images.pexels.com/photos/5709669/pexels-photo-5709669.jpeg?auto=compress&cs=tinysrgb&h=350",
//       price: 39.99
//     },
//     {
//       title: "Space Explorer",
//       imageURL: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&h=350",
//       price: 49.99
//     },
//     {
//       title: "Cyber City Racer",
//       imageURL: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
//       price: 29.99
//     },
//     {
//       title: "The Legend of Zelda",
//       imageURL: "https://images.pexels.com/photos/28350212/pexels-photo-28350212.jpeg",
//       price: 59.99
//     },
//     {
//       title: "Super Mario Odyssey",
//       imageURL: "https://images.pexels.com/photos/14823949/pexels-photo-14823949.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 59.99
//     },
//     {
//       title: "Mario Kart Deluxe",
//       imageURL: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 49.99
//     },
//     {
//       title: "Mario Party Bash",
//       imageURL: "https://images.pexels.com/photos/17122728/pexels-photo-17122728/free-photo-of-a-nintendo-switch-and-a-bunch-of-super-mario-game-items.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 39.99
//     },
//     {
//       title: "Sonic Speed Rush",
//       imageURL: "https://images.pexels.com/photos/399636/pexels-photo-399636.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 44.99
//     }
//   ];

//   // 2. Initialize an empty shopping cart array
//   const cart = [];

//   // 3. Get references to cart display elements in the HTML
//   const cartContainer = document.getElementById("cart-container");
//   const totalPriceDisplay = document.getElementById("total-price");

//   // Added references for cart icon elements
//   const cartIcon = document.getElementById("cart-icon");
//   const cartCount = document.getElementById("cart-count");
//   const cartDropdown = document.getElementById("cart-dropdown");

//   // 4. Define a function to update the cart display
//   function updateCart() {
//     // Clear the cart display area
//     cartContainer.innerHTML = "";

//     // Calculate total price
//     let total = 0;

//     // Loop through the cart array and display each item
//     cart.forEach((item) => {
//       const itemElement = document.createElement("p");
//       itemElement.textContent = `${item.title} - $${item.price.toFixed(2)}`;
//       cartContainer.appendChild(itemElement);
//       total += item.price;
//     });

//     // Show total price
//     totalPriceDisplay.textContent = `Total: $${total.toFixed(2)}`;

//     // Update cart count on the icon
//     cartCount.textContent = cart.length;
//   }

//   // 5. Get a reference to the HTML container for the game cards
//   const gameContainer = document.getElementById("game-container");

//   // 6. Loop through the game array and create UI for each game
//   games.forEach(game => {
//     const card = document.createElement("div");
//     card.classList.add("game-card");

//     const img = document.createElement("img");
//     img.src = game.imageURL;
//     img.alt = game.title;

//     const title = document.createElement("h3");
//     title.textContent = game.title;

//     const price = document.createElement("p");
//     price.textContent = `$${game.price.toFixed(2)}`;

//     const addButton = document.createElement("button");
//     addButton.textContent = "Add to Cart";
//     addButton.addEventListener("click", () => {
//       cart.push(game);
//       updateCart();
//     });

//     card.appendChild(img);
//     card.appendChild(title);
//     card.appendChild(price);
//     card.appendChild(addButton);

//     gameContainer.appendChild(card);
//   });

//   // 7. Add event listener to cart icon to toggle dropdown
//   cartIcon.addEventListener("click", () => {
//     cartDropdown.classList.toggle("hidden");
//   });

//   // Initialize the cart count and dropdown (hidden initially)
//   updateCart();
//   cartDropdown.classList.add("hidden");
// });


// document.addEventListener("DOMContentLoaded", () => {
//   // 1. Create an array of game objects
//   // Each object contains: title, imageURL, and price
//   const games = [
//     {
//       title: "Fantasy Warrior",
//       imageURL: "https://images.pexels.com/photos/5709669/pexels-photo-5709669.jpeg?auto=compress&cs=tinysrgb&h=350",
//       price: 39.99
//     },
//     {
//       title: "Space Explorer",
//       imageURL: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&h=350",
//       price: 49.99
//     },
//     {
//       title: "Cyber City Racer",
//       imageURL: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
//       price: 29.99
//     },
//     {
//       title: "The Legend of Zelda",
//       imageURL: "https://images.pexels.com/photos/28350212/pexels-photo-28350212.jpeg",
//       price: 59.99
//     },
//     {
//       title: "Super Mario Odyssey",
//       imageURL: "https://images.pexels.com/photos/14823949/pexels-photo-14823949.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 59.99
//     },
//     {
//       title: "Mario Kart Deluxe",
//       imageURL: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 49.99
//     },
//     {
//       title: "Mario Party Bash",
//       imageURL: "https://images.pexels.com/photos/17122728/pexels-photo-17122728/free-photo-of-a-nintendo-switch-and-a-bunch-of-super-mario-game-items.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 39.99
//     },
//     {
//       title: "Sonic Speed Rush",
//       imageURL: "https://images.pexels.com/photos/399636/pexels-photo-399636.jpeg?auto=compress&cs=tinysrgb&w=1200",
//       price: 44.99
//     }

// ];

//   // 2. Initialize an empty shopping cart array
//   const cart = [];

//   // 3. Get references to cart display elements in the HTML
//   const cartContainer = document.getElementById("cart-container");
//   const totalPriceDisplay = document.getElementById("total-price");

//   // 4. Define a function to update the cart display
//   // - Clear the cart display area
//   // - Loop through the cart array
//   // - Display each game’s title and price
//   // - Calculate and show the total price
//   function updateCart() {
//     cartContainer.innerHTML = "";

//     let total = 0;

//     cart.forEach((item) => {
//       const itemElement = document.createElement("p");
//       itemElement.textContent = `${item.title} - $${item.price.toFixed(2)}`;
//       cartContainer.appendChild(itemElement);
//       total += item.price;
//     });

//     totalPriceDisplay.textContent = `Total: $${total.toFixed(2)}`;
//   }

//   // 5. Get a reference to the HTML container for the game cards
//   const gameContainer = document.getElementById("game-container");

//   // 6. Loop through the game array and create UI for each game
//   games.forEach(game => {
//     const card = document.createElement("div");
//     card.classList.add("game-card");

//     const img = document.createElement("img");
//     img.src = game.imageURL;
//     img.alt = game.title;

//     const title = document.createElement("h3");
//     title.textContent = game.title;

//     const price = document.createElement("p");
//     price.textContent = `$${game.price.toFixed(2)}`;

//     const addButton = document.createElement("button");
//     addButton.textContent = "Add to Cart";
//     addButton.addEventListener("click", () => {
//       cart.push(game);
//       updateCart();
//     });

//     card.appendChild(img);
//     card.appendChild(title);
//     card.appendChild(price);
//     card.appendChild(addButton);

//     gameContainer.appendChild(card);
//   });
// });    