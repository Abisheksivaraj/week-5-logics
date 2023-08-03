'use script'


// 1.Write a function that changes the text content of a given element.



function changeText() {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "Mother is My Love";
}

// 2. Write a function that counts and displays the number of characters in a text input.


function characterCounter() {
  const inputElement = document.getElementById("textInput");
  const characterCountElement = document.getElementById("characterCount");
  const text = inputElement.value;
  const count = text.length;
  characterCountElement.textContent = count;
}

// 3. Create a simple image gallery that allows users to click on thumbnails and display the selected image in a larger view.



function showImage(imageUrl) {
  const largeImageElement = document.getElementById("largeImage");
  largeImageElement.src = imageUrl;
  largeImageElement.style.display = "block";
}

// 4. Write a function that counts and displays the frequency of each word in a given sentence.



// 5. Write a function that checks if two password inputs match and displays the result.



function checkPasswordMatch() {
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const matchResultElement = document.getElementById("matchResult");
  if (password1 === password2) {
    matchResultElement.textContent = "password is correct";
  } else {
    matchResultElement.textContent = "password do not match!";
  }
}

// 6. Write a function that validates a credit card number and displays the result.

function addItem() {
  var newItem = document.getElementById("itemInput").value;

  var itemList = document.getElementById("itemList");

  var listItem = document.createElement("li");

  listItem.textContent = newItem;

  itemList.appendChild(listItem);

  document.getElementById("itemInput").value = "";
}

function removeItem(item) {
  var itemList = document.getElementById("itemList");
  itemList.removeChild(item);
}



// 7. Create a dynamic list where users can add and remove items.

// Test Case:
function addItem() {
  var newItem = document.getElementById("itemInput").value;

  var itemList = document.getElementById("itemList");

  var listItem = document.createElement("li");

  listItem.textContent = newItem;

  itemList.appendChild(listItem);

  document.getElementById("itemInput").value = "";
}

function removeItem(item) {
  var itemList = document.getElementById("itemList");
  itemList.removeChild(item);
}


// 8. Write a function that checks if a given word is a palindrome and displays the result.

// Test Case:

// <input type="text" id="wordInput" placeholder="Enter a word">

// <button onclick="checkPalindrome()">Check Palindrome</button>

// <p id="palindromeResult"></p>

function checkPalindrome() {
  const wordInput = document.getElementById("wordInput");
  const palindromeResultElement = document.getElementById("palindromeResult");
  const word = wordInput.value.trim().toLowerCase();

  if (isPalindrome(word)) {
    palindromeResultElement.textContent = "It's a palindrome!";
  } else {
    palindromeResultElement.textContent = "It's not a palindrome!";
  }
}

function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// 9. Create a countdown timer that starts when a button is clicked and displays the remaining time.

// Test Case:

// <button onclick="startTimer(60)">Start Timer</button>

// <p id="timerDisplay">Time remaining: </p>

function startTimer(durationInSeconds) {
  const timerDisplay = document.getElementById("timerDisplay");
  let timeRemaining = durationInSeconds;

  const countdownInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.textContent = "Time's up!";
    } else {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      timerDisplay.textContent = `Time remaining: ${minutes}:${String(
        seconds
      ).padStart(2, "0")}`;
      timeRemaining--;
    }
  }
}

// 10. Create a dark mode toggle that switches the page between light and dark themes.

// Test Case:

// <button onclick="toggleDarkMode()">Toggle Dark Mode >

function toggleDarkMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
}

