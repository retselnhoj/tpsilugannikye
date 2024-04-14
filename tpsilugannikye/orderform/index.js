document.addEventListener('DOMContentLoaded', function() {
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const totalPrice = document.getElementById('total-price');
    const orderForm = document.getElementById('order-form');

    let total = 0;

    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentNode.querySelector('input');
            const price = parseInt(input.parentNode.previousElementSibling.textContent.trim().split(' ')[1]);
            if (this.classList.contains('plus')) {
                input.value = parseInt(input.value) + 1;
                total += price;
            } else {
                if (parseInt(input.value) > 0) {
                    input.value = parseInt(input.value) - 1;
                    total -= price;
                }
            }
            totalPrice.textContent = `Total Price: ${total}php`;
        });
    });

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // You can add code here to submit the order
        alert(`Your total order is ${total}php`);
    });
});
