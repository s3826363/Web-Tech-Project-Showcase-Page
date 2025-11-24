"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Trophy Case Sports Shopping Cart
   Author: Michael Bahamon
   Date:   11/24/2025
   
   Filename: tc_cart.js
	
   This script builds the shopping cart table, calculates
   the cost of each item, and computes the order subtotal.
*/


// Running total for the entire order
let orderTotal = 0;

// Start the HTML for the shopping cart table
let cartHTML = "<table>" +
               "<tr>" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>" +
               "</tr>";

// Loop through all items in the order arrays
for (let i = 0; i < item.length; i++) {

   // Start a new table row and display the item image
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='Item " + item[i] + "' /></td>";

   // Add description, price, and quantity
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";

   // Calculate the total cost for this item (price * qty)
   let itemCost = itemPrice[i] * itemQty[i];

   // Add the item cost to the table row
   cartHTML += "<td>$" + itemCost.toFixed(2) + "</td></tr>";

   // Add this item's cost to the order total
   orderTotal += itemCost;
}

// After loop: add the subtotal row and close the table
cartHTML += "<tr>" +
            "<td colspan='4'>Subtotal</td>" +
            "<td>$" + orderTotal.toFixed(2) + "</td>" +
            "</tr>" +
            "</table>";

// Insert the completed table into the page
document.getElementById("cart").innerHTML = cartHTML;