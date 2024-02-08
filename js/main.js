var quotes = [
  '“the more you bain the more you gain ”',
  '“Be who you are and say what you feel, because those who mind don not matter, and those who matter don not mind.”',
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  '“Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .”',
  '“So many books, so little time.”',
  "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  '“Be yourself; everyone else is already taken.”',
  '“A room without books is like a body without a soul.”',
  "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
];

var authors = [
  '"― J.K. Rowling, Harry Potter and the Goblet of Fire"',
  '"― Albert Camus"',
  '"― C.S. Lewis, The Four Loves"',
  '"― Elbert Hubbard"',
  '"― Some one"',
  '"― Marilyn Monroe"',
  '"― Maya Angelou"',
  '"― Oscar Wilde"',
  '"― Marcus Tullius Cicero"',
  '"― William W. Purkey"',
];

function getQuotesAndAuthor() {
  // اختيار رقم عشوائي للاقتباس
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // الحصول على الاقتباس والمؤلف باستخدام الرقم العشوائي
  var quote = quotes[randomIndex];
  var author = authors[randomIndex];

  // عرض الاقتباس والمؤلف في العناصر المعنونة
  document.getElementById('text-quotes').innerHTML = quote;
  document.getElementById('text-author').innerHTML = author;
}
