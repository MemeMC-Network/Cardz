document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".buy-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for your purchase!");
        });
    });
});
