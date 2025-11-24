"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Set footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple order total calculator on order page
  const orderTable = document.querySelector(".order-table");
  if (orderTable) {
    const qtyInputs = orderTable.querySelectorAll(".qty-input");
    const subtotalSpan = document.getElementById("orderSubtotal");
    const taxSpan = document.getElementById("orderTax");
    const totalSpan = document.getElementById("orderTotal");
    const TAX_RATE = 0.07; // 7%

    function updateTotals() {
      let subtotal = 0;

      orderTable.querySelectorAll("tbody tr").forEach(row => {
        const price = parseFloat(row.getAttribute("data-price")) || 0;
        const qtyInput = row.querySelector(".qty-input");
        const qty = parseInt(qtyInput.value, 10) || 0;
        const lineTotal = price * qty;
        subtotal += lineTotal;

        const lineCell = row.querySelector(".line-subtotal");
        if (lineCell) {
          lineCell.textContent = "$" + lineTotal.toFixed(2);
        }
      });

      const tax = subtotal * TAX_RATE;
      const total = subtotal + tax;

      if (subtotalSpan) subtotalSpan.textContent = "$" + subtotal.toFixed(2);
      if (taxSpan) taxSpan.textContent = "$" + tax.toFixed(2);
      if (totalSpan) totalSpan.textContent = "$" + total.toFixed(2);
    }

    qtyInputs.forEach(input => {
      input.addEventListener("input", updateTotals);
    });

    // Initial calculation
    updateTotals();

    // Demo-only submit behavior
    const orderForm = document.getElementById("orderForm");
    if (orderForm) {
      orderForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("This is a demo for your Web Tech project. No real order was placed.");
      });
    }
  }
});