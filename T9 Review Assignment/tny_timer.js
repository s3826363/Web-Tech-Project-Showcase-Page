/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Michael Bahamon
   Date:   11-24-25

*/
"use strict";   // Enforce strict mode

// Call showClock once, then run it every second
showClock();
setInterval(showClock, 1000);

/* -------------------------------------------------
   Function: showClock()
   Updates the current date/time display and the
   countdown to 9:00 p.m. on the next July 4th.
------------------------------------------------- */
function showClock() {

   // 1. Current date/time
   // For the *final* version of the assignment, use the current date/time:
   var thisDay = new Date();

   // --- For the earlier step in the book, you would use this instead: ---
   // var thisDay = new Date("May 19, 2021 09:31:27");

   // 2. Localized date and time strings
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   // 3. Insert into #currentTime as <span>date</span><span>time</span>
   var currentTime = document.getElementById("currentTime");
   currentTime.innerHTML = "<span>" + localDate + "</span>" +
                           "<span>" + localTime + "</span>";

   // 4. Get the date of the next July 4
   var j4Date = nextJuly4(thisDay);

   // 5. Set time to 9 p.m. (21:00 in 24-hour format)
   j4Date.setHours(21, 0, 0, 0);  // 21:00:00.000

   // 6. Compute time difference in milliseconds
   var timeDiff = j4Date - thisDay;

   // Convert ms → seconds, minutes, hours, days
   var secsLeft = timeDiff / 1000;
   var minsLeft = secsLeft / 60;
   var hrsLeft  = minsLeft / 60;
   var daysLeft = hrsLeft / 24;

   // 7. Extract whole days, hours, minutes, seconds
   var days = Math.floor(daysLeft);
   var hrs  = Math.floor(hrsLeft % 24);
   var mins = Math.floor(minsLeft % 60);
   var secs = Math.floor(secsLeft % 60);

   // Update countdown spans
   document.getElementById("dLeft").textContent = days;
   document.getElementById("hLeft").textContent = hrs;
   document.getElementById("mLeft").textContent = mins;
   document.getElementById("sLeft").textContent = secs;
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}