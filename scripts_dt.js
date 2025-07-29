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
