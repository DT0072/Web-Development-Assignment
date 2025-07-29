const books = [
  {
    id: '1',
    title: 'Shield of Sparrows',
    author: 'Devney Perry',
    cover: 'https://mphonline.com/cdn/shop/files/9781911750017.jpg?v=1751615044&width=840',
    price: 'RM75.00',
    rating: 5.0,
    detailPage: 'Shield_of_Sparrows.html'
  },
  {
    id: '2',
    title: 'Save Me (UK edition)',
    author: 'Mona Kasten',
    cover: 'https://mphonline.com/cdn/shop/files/9781405976985.jpg?v=1751535410&width=840',
    price: 'RM50.00',
    rating: 4.5,
    detailPage: 'Save_Me.html'
  },
  {
    id: '3',
    title: 'Maid for Each Other (UK edition)',
    author: 'Lynn Painter',
    cover: 'https://mphonline.com/cdn/shop/files/9781405959889.jpg?v=1751612079&width=840',
    price: 'RM60.00',
    rating: 4.5,
    detailPage: 'Maid_for_Each_Other.html'
  },
  {
    id: '4',
    title: 'KL Tower of Terror',
    author: 'Nayli Nasran',
    cover: 'https://mphonline.com/cdn/shop/files/Screenshot_2025-05-09_at_11.33.39AM.png?v=1749089410&width=640',
    price: 'RM45.00',
    rating: 4.0,
    detailPage: 'KL_Tower_of_Terror.html'
  },
  {
    id: '5',
    title: 'Chords of the Reckless Heart',
    author: 'Marisa Fendi',
    cover: 'https://mphonline.com/cdn/shop/files/Screenshot_2025-05-09_at_4.37.29PM.png?v=1749088751&width=840',
    price: 'RM42.00',
    rating: 4.0,
    detailPage: 'Chords_of_the_Reckless_Heart.html'
  },
  {
    id: '6',
    title: 'Here One Moment',
    author: 'Liane Moriarty',
    cover: 'https://mphonline.com/cdn/shop/files/9781405942287.jpg?v=1751623223&width=840',
    price: 'RM64.95',
    rating: 4.0,
    detailPage: 'Here_One_Moment.html'
  },
  {
    id: '7',
    title: 'AlmaClassics Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://mphonline.com/cdn/shop/files/AlmaClassicsGreatGatsby_9781847492586_mphbooks.jpg?v=1750311870&width=840',
    price: 'RM34.50',
    rating: 5.0,
    detailPage: 'AlmaClassics_Great_Gatsby.html'
  },
  {
    id: '8',
    title: 'Beyond Good and Evil',
    author: 'Friedrich Nietzsche',
    cover: 'https://mphonline.com/cdn/shop/files/9780141395838_MPH.jpg?v=1753062681&width=840',
    price: 'RM45.90',
    rating: 4.5,
    detailPage: 'Beyond_Good_and_Evil.html'
  },
  {
    id: '9',
    title: 'Kill Creatures (US Edition)',
    author: 'Rory Power',
    cover: 'https://mphonline.com/cdn/shop/files/kill_creatures_rory_power_9798217116812.jpg?v=1748944261&width=840',
    price: 'RM60.95',
    rating: 4.5,
    detailPage: 'Kill_Creatures.html'
  },
  {
    id: '10',
    title: 'Get Them Back!',
    author: 'Nayli Nasran',
    cover: 'https://mphonline.com/cdn/shop/files/9786299519591.jpg?v=1750239450&width=480',
    price: 'RM30.00',
    rating: 4.0,
    detailPage: 'Get_Them_Back.html'
  },
  {
    id: '11',
    title: 'Minecraft: Mobestiary',
    author: 'Mojang AB, The Official Minecraft Team',
    cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/45/60/4560e4d394d263f0ab1fc5dfffb6e816.jpg',
    price: 'RM55.00',
    rating: 5.0,
    detailPage: 'Minecraft_Mobestiary.html'
  },
  {
    id: '12',
    title: 'The Dangerous Gift (Wings of Fire #14)',
    author: 'Tui T. Sutherland',
    cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/bc/a0/bca05618e3a21a365dd70ca2aa00f7e0.jpg',
    price: 'RM34.35',
    rating: 4.5,
    detailPage: 'The_Dangerous_Gift.html'
  },
  {
    id: '13',
    title: 'Maybe',
    author: 'Kobi Yamada',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/77/e6/77e6e1034fbc9540ff6ded34ee691324.jpg',
    price: 'RM72.41',
    rating: 4.5,
    detailPage: 'Maybe.html'
  },
  {
    id: '14',
    title: 'Brown Bear, Brown Bear, What do you See?',
    author: 'Bill Martin',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/1f/b4/1fb4d241d161f0e547e193f6971a2aa6.jpg',
    price: 'RM34.35',
    rating: 4.0,
    detailPage: 'Brown_Bear.html'
  },
  {
    id: '15',
    title: 'Pay It Forward: Young Readers Edition',
    author: 'Catherine Ryan Hyde',
    cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/4b/58/4b58d30e197cc9f1dc2e6904c2415164.jpg',
    price: 'RM34.35',
    rating: 4.0,
    detailPage: 'Pay_It_Forward.html'
  },
  {
    id: '16',
    title: 'Haunting of the Ghost Dragon: A Branches Book (Dragon Masters #27)',
    author: 'Tracey West',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/4d/1d/4d1db180ef1d6f73683633a695a5d39c.jpg',
    price: 'RM27.93',
    rating: 4.0,
    detailPage: 'Haunting_Ghost_Dragon.html'
  },
  {
    id: '17',
    title: 'Guy Stuff: The Body Book for Boys',
    author: 'Cara Natterson, Cara Familian Natterson',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/fb/19/fb19d9e0b02edf383b9acff90f9a00ff.jpg',
    price: 'RM49.63',
    rating: 5.0,
    detailPage: 'Guy_Stuff.html'
  },
  {
    id: '18',
    title: 'Abc of Body Safety and Consent: Teach Children About Body Safety, Consent, Safe',
    author: 'Jayneen Sanders',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/1c/d3/1cd39ef9458cc428f4013f35beeb07f8.jpg',
    price: 'RM30.46',
    rating: 4.5,
    detailPage: 'ABC.html'
  },
  {
    id: '19',
    title: 'Diary of a Wimpy Kid Blank Journal',
    author: 'Jeff Kinney',
    cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/b2/37/b237efbffe141725652d7aac29787121.jpg',
    price: 'RM53.30',
    rating: 4.5,
    detailPage: 'Diary_Wimpy_Kid.html'
  },
  {
    id: '20',
    title: 'Enchanted Air: Two Cultures, Two Wings: A Memoir',
    author: 'Margarita Engle',
    cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/b0/1d/b01d77c2d150f8e120cdbef4060754b2.jpg',
    price: 'RM45.81',
    rating: 4.0,
    detailPage: 'Enhanted_Air.html'
  }
  // Add these at the end of your existing `books` array
{
  id: '21',
  title: 'Whisky A Tasting Course: A New Way to Think & Drink Whisky',
  author: 'Ludlow, Eddie',
  cover: 'https://mphonline.com/cdn/shop/files/41Hdsan7GxL._SX218_BO1_204_203_200_QL40_FMwebp.webp?v=1690764801&width=840',
  price: 'RM129.95',
  rating: 5.0
},
{
  id: '22',
  title: "Final Reckoning: An Insider's View of the Fall of Malaysia's Barisan Nasional Government",
  author: 'BOSE, ROMEN',
  cover: 'https://mphonline.com/cdn/shop/products/9789814954549.jpg?v=1633333833&width=840',
  price: 'RM122.50',
  rating: 5.0
},
{
  id: '23',
  title: 'Federal Territories Syariah Laws - As at 15/4/2025',
  author: 'ILBS',
  cover: 'https://mphonline.com/cdn/shop/files/9789678930819_MPH.jpg?v=1749601294&width=840',
  price: 'RM22.50',
  rating: 4.5
},
{
  id: '24',
  title: 'Companies Act 2016 (Act 777), Regulations & Rules - As at 25/4/2025',
  author: 'ILBS',
  cover: 'https://mphonline.com/cdn/shop/files/Companies_Act_2016_Act_777_Regulations_Rules_-_As_at_2542025_9789678930833_MPH.webp?v=1751964676&width=840',
  price: 'RM52.50',
  rating: 4.0
},
{
  id: '25',
  title: 'International Peace & Security: Challenges And The Way Forward',
  author: 'Eishan Jan, Mohammad Naqib',
  cover: 'https://mphonline.com/cdn/shop/files/InternationalPeace_Security.png?v=1749612001&width=840',
  price: 'RM150.00',
  rating: 4.0
},
{
  id: '26',
  title: 'Halal Industry in Malaysia: Understanding the Legal & Administrative Procedures',
  author: 'Ramli, Noriah',
  cover: 'https://mphonline.com/cdn/shop/files/HalalIndustryinMalaysia_9789674571764_FC_mphbooks.jpg?v=1749616110&width=840',
  price: 'RM175.00',
  rating: 4.0
},
{
  id: '27',
  title: 'Biology: The Whole Story',
  author: 'Turnbull, Lindsay',
  cover: 'https://mphonline.com/cdn/shop/files/9781788451932_MPH.jpg?v=1729567015&width=840',
  price: 'RM169.90',
  rating: 5.0
},
{
  id: '28',
  title: 'Quantum Mechanics: The Theoretical Minimum',
  author: 'SUSSKIND, LEONARD',
  cover: 'https://mphonline.com/cdn/shop/products/2363b380514d4432bb3483447e018a4e.jpg?v=1610523276&width=840',
  price: 'RM69.95',
  rating: 4.5
},
{
  id: '29',
  title: 'AI for Life',
  author: 'Quillian, Celia',
  cover: 'https://mphonline.com/cdn/shop/files/9781507223390.jpg?v=1741719778&width=840',
  price: 'RM97.90',
  rating: 4.5
},
{
  id: '30',
  title: 'Legal Profession in Malaysia: Practice and Ethics',
  author: 'Ali Mohamed, Ashgar Ali',
  cover: 'https://mphonline.com/cdn/shop/files/LegalProfessioninMalaysiaPracticeandEthics_FC_9789674572051_mphbooks.webp?v=1749613588&width=840',
  price: 'RM290.00',
  rating: 4.0
}

];

// Utility to find a book by its id
function getBookById(id) {
  return books.find(book => book.id === id);
}

// Render selected book details into the DOM
function renderBookDetails(book) {
  if (!book) return;
  document.querySelector('.book-title').textContent = book.title;
  document.querySelector('h1.book-title').textContent = book.title;
  document.querySelector('.book-author').textContent = 'by ' + book.author;
  document.querySelector('.book-cover img').src = book.cover;
  document.querySelector('.book-price').textContent = book.price;
  function getStars(rating) {
  const fullStar = '★';
  const halfStar = '⯪'; // or '☆' for empty
  const emptyStar = '☆';

  let stars = '';
  const fullCount = Math.floor(rating);
  const half = rating % 1 !== 0;

  stars += fullStar.repeat(fullCount);
  if (half) stars += halfStar;
  stars += emptyStar.repeat(5 - stars.length);

  return stars;
  }

  document.querySelector('.rating-stars').textContent = getStars(book.rating);
  document.querySelector('.rating-value').textContent = `(${book.rating}/5.0)`;
  document.querySelector('.description').textContent = book.description;
}

// On DOM ready, fetch selectedBookId and display details
document.addEventListener('DOMContentLoaded', () => {
  const bookId = sessionStorage.getItem('selectedBookId');
  const book = getBookById(bookId);
  renderBookDetails(book);
  // Update breadcrumb title
  const crumb = document.querySelector('.breadcrumb span.book-title');
  if (crumb) crumb.textContent = book ? book.title : 'Unknown Book';
});
