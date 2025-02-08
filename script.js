document.addEventListener("DOMContentLoaded", () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    
    // Load Dark Mode preference from local storage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }
    
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Navbar Transparency on Scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Cart System
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update Cart Count
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;

    // Display Cart Items (in cart.html)
    if (document.body.contains(document.getElementById('cart-list'))) {
        const cartList = document.getElementById('cart-list');
        const totalPrice = document.getElementById('total-price');
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name} - $${item.price}`;
            cartList.appendChild(listItem);
            total += item.price;
        });

        totalPrice.innerText = total;
    }

    // Add to Cart (on all pages with cards)
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const name = card.getAttribute('data-name');
            const price = parseInt(card.getAttribute('data-price'));

            const newItem = { name, price };
            cart.push(newItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update Cart Count in Navbar
            cartCount.innerText = cart.length;

            alert(`${name} has been added to your cart!`);
        });
    });
});
