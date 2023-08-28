function calculateTotalBudget(deals) {
    let totalBudget = 0;
    for (let deal of deals) {
        totalBudget += deal.amount;
    }
    return totalBudget;
}

// Deal constructor function
function Deal(name, amount) {
    this.name = name;
    this.amount = amount;
}

// IIFE to encapsulate the application
(function () {
    const dealForm = document.getElementById("dealForm");
    const dealList = document.getElementById("dealList");
    const totalBudgetElement = document.getElementById("totalBudget");
    const deals = [];

    // Event handler for form submission
    dealForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const dealNameInput = document.getElementById("dealName");
        const amountInput = document.getElementById("amount");

        const dealName = dealNameInput.value;
        const amount = parseFloat(amountInput.value);

        // Create a new Deal instance and add it to the deals array
        const newDeal = new Deal(dealName, amount);
        deals.push(newDeal);

        // Clear the input fields
        dealNameInput.value = "";
        amountInput.value = "";

        // Update the deal list
        const dealItem = document.createElement("li");
        dealItem.classList.add("list-group-item");
        dealItem.classList.add("list-group-item-info");
        dealItem.textContent = `${newDeal.name}: Rs. ${newDeal.amount}`;
        dealList.appendChild(dealItem);

        // Update the total budget
        const totalBudget = calculateTotalBudget(deals);
        totalBudgetElement.textContent = totalBudget;
    });
})();