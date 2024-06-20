
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            resetStars();
            highlightStars(value);
        });

        star.addEventListener('mouseover', function () {
            const value = this.getAttribute('data-value');
            resetHover();
            highlightStars(value, 'hovered');
        });

        star.addEventListener('mouseout', function () {
            resetHover();
            const selectedStars = document.querySelectorAll('.star.selected');
            if (selectedStars.length > 0) {
                const selectedValue = selectedStars[selectedStars.length - 1].getAttribute('data-value');
                highlightStars(selectedValue, 'selected');
            }
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    }

    function resetHover() {
        stars.forEach(star => {
            star.classList.remove('hovered');
        });
    }

    function highlightStars(value, className = 'selected') {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= value) {
                star.classList.add(className);
            }
        });
    }
});




//order button


document.addEventListener('DOMContentLoaded', () => {
    const plusButton = document.querySelector('.plusButton');
    const minusButton = document.querySelector('.minusButton');
    const quantityDisplay = document.getElementById('quantity');
    const addToCartButton = document.querySelector('.addToCartButton');
    const cartItems = document.getElementById('cartItems');

    let quantity = 1; 

    plusButton.addEventListener('click', () => {
        quantity++;
        updateQuantityDisplay();
    });

    minusButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    addToCartButton.addEventListener('click', () => {
        addToCart('HEAT WAVE Sirona Sauna', 450.00, quantity);
    });

    function updateQuantityDisplay() {
        quantityDisplay.textContent = quantity;
    }

    function addToCart(productName, productPrice, quantity) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - €${productPrice.toFixed(2)} x ${quantity} = €${(productPrice * quantity).toFixed(2)}`;
        cartItems.appendChild(cartItem);
    }
});




