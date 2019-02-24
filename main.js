// Table of Contents
// 01 - Array of Quotes
// 02 - getRandomQuote function
// 03 - AddEventListener - new quote when click button

// 01 - Array of Quotes
var quotes = [
  ["Successful organizing forces you to look at the big picture, not one small section of the frame, so that the system you design will be complete.", "Julie Morgenstern", "Author, Organization and Time Management Consultant"],
  ["Organizing is what you do before you do something, so that when you do it, it is not all mixed up.", "A.A. Milne", "author known for \"Winnie-the-Pooh\""],
  ["For every minute spent in organizing, an hour is earned.", "Benjamin Franklin", "One of the Founding Fathers of the United States"],
  ["Once you have a clear idea of your priorities – that is your values, goals and high leverage activities, organize around them.", "Stephen Covey", "author known for \"The 7 Habits of Highly Effective People\""],
  ["Limit your \"always\" and your \"nevers.\"", "Amy Poehler", "Comedian"]
];

// 02 - getRandomQuote function
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);

  console.log(randomNumber);
  console.log("successful click");

  return document.getElementById('text').innerHTML = `"${quotes[randomNumber][0]}"`;
};

// 03 - AddEventListener - click new-quote button to getRandomQuote
document.getElementById('new-quote').addEventListener("click", getRandomQuote, true);
