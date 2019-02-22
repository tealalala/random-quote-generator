// Table of Contents
// 01 - Array of Quotes
// 02 -


var quotes = [
  ["Successful organizing forces you to look at the big picture, not one small section of the frame, so that the system you design will be complete.", "Julie Morgenstern", "Author, Organization and Time Management Consultant"],
  ["Organizing is what you do before you do something, so that when you do it, it is not all mixed up.", "A.A. Milne", "author known for \"Winnie-the-Pooh\""],
  ["For every minute spent in organizing, an hour is earned.", "Benjamin Franklin", "One of the Founding Fathers of the United States"]
];

var randomNumber = Math.floor(Math.random() * quotes.length);

document.getElementById('text').innerHTML = quotes[randomNumber][0];
