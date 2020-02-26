var quotes = [
  'Michael Forbes lives in a pigsty and bad liquor company Glenfiddich gave him Scot of the Year award...',
  'Amazing how the haters & losers keep tweeting the name F**kface Von Clownstick like they are so original & like no one else is doing it...',
  'Why is Obama playing basketball today? That is why our country is in trouble!',
  '....Democrats talking point is that we are doing badly. If the virus disappeared tomorrow, they would say we did a really poor, and even incompetent, job. Not fair, but it is what it is. So far, by the way, we have not had one death. Let’s keep it that way!',
  'I have brought millions of people into the Republican Party, while the Dems are going down. Establishment wants to kill this movement!',
  'In light the Benghazi emails released last night, it is apparent that Obama has no problem lying to the American public...',
  'Macys "one of the worst performing stocks on the S&P last year',
  'Republican candidates dont have a clue',
  'Chris Matthews really dumb guy (and I know him well)',
  'NY Times "how bad is the New York Times—the most inaccurate coverage constantly"',
  'Happy Fathers Day to all, even the haters and losers!',
  'Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional ‘global warming’ is worse.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('displayQuote').innerHTML = quotes[randomNumber];
}
