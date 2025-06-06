document.addEventListener("DOMContentLoaded", () => {
  const games = [
    { title: "Fantasy Warrior", imageURL: "https://images.pexels.com/photos/5709669/pexels-photo-5709669.jpeg?auto=compress&cs=tinysrgb&h=350", price: 39.99 },
    { title: "Space Explorer", imageURL: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&h=350", price: 49.99 },
    { title: "Cyber City Racer", imageURL: "https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350", price: 29.99 },
    { title: "The Legend of Zelda", imageURL: "https://images.pexels.com/photos/28350212/pexels-photo-28350212.jpeg", price: 59.99 },
    { title: "Super Mario Odyssey", imageURL: "https://images.pexels.com/photos/14823949/pexels-photo-14823949.jpeg?auto=compress&cs=tinysrgb&w=1200", price: 59.99 },
    { title: "Mario Kart Deluxe", imageURL: "https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1200", price: 49.99 },
    { title: "Mario Party Bash", imageURL: "https://images.pexels.com/photos/17122728/pexels-photo-17122728/free-photo-of-a-nintendo-switch-and-a-bunch-of-super-mario-game-items.jpeg?auto=compress&cs=tinysrgb&w=1200", price: 39.99 },
    { title: "Sonic Speed Rush", imageURL: "https://images.pexels.com/photos/399636/pexels-photo-399636.jpeg?auto=compress&cs=tinysrgb&w=1200", price: 44.99 }
  ];

  const cart = [];

  const cartContainer = document.getElementById("cart-container");
  const totalPriceDisplay = document.getElementById("total-price");
  const cartIcon = document.getElementById("cart-icon");
  const cartCount = document.getElementById("cart-count");
  const cartDropdown = document.getElementById("cart-dropdown");

  // ✅ Updated to allow removal of items
  function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");

      const itemText = document.createElement("span");
      itemText.textContent = `${item.title} - $${item.price.toFixed(2)}`;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");

      removeButton.addEventListener("click", () => {
        cart.splice(index, 1);
        updateCart();
      });

      itemElement.appendChild(itemText);
      itemElement.appendChild(removeButton);
      cartContainer.appendChild(itemElement);

      total += item.price;
    });

    totalPriceDisplay.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
  }

  const gameContainer = document.getElementById("game-container");

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
      cart.push({ ...game }); // Make a shallow copy
      updateCart();
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(addButton);

    gameContainer.appendChild(card);
  });

  // Toggle dropdown visibility
  cartIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    cartDropdown.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target)) {
      cartDropdown.classList.add("hidden");
    }
  });

  updateCart();
  cartDropdown.classList.add("hidden");
});