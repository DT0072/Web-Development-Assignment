const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 900){
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
  dropdownToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== parent) d.classList.remove('open');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const selectSort = document.getElementById('sort-books');
    const bookList = document.querySelector('.book-list');

    selectSort.addEventListener('change', function () {
        const books = Array.from(bookList.querySelectorAll('.book'));
        const sortValue = this.value;
        let sortedBooks = [];

        if (sortValue === 'az') {
            sortedBooks = books.sort((a, b) => {
                const titleA = a.querySelector('.book-title').textContent.toLowerCase();
                const titleB = b.querySelector('.book-title').textContent.toLowerCase();
                return titleA.localeCompare(titleB);
            });
        } else if (sortValue === 'za') {
            sortedBooks = books.sort((a, b) => {
                const titleA = a.querySelector('.book-title').textContent.toLowerCase();
                const titleB = b.querySelector('.book-title').textContent.toLowerCase();
                return titleB.localeCompare(titleA);
            });
        } else if (sortValue === 'price-low') {
            sortedBooks = books.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.book-price').textContent.replace(/[^\d.]/g, ''));
                const priceB = parseFloat(b.querySelector('.book-price').textContent.replace(/[^\d.]/g, ''));
                return priceA - priceB;
            });
        } else if (sortValue === 'price-high') {
            sortedBooks = books.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.book-price').textContent.replace(/[^\d.]/g, ''));
                const priceB = parseFloat(b.querySelector('.book-price').textContent.replace(/[^\d.]/g, ''));
                return priceB - priceA;
            });
        } else {
            // Default: don't sort
            sortedBooks = books;
        }

        // Clear and re-append sorted books
        bookList.innerHTML = '';
        sortedBooks.forEach(book => bookList.appendChild(book));
    });
});

function handleAddToCart(button) {
  const book = button.closest('.book');
  const imgElement = book.querySelector('img'); 
  const img = imgElement ? imgElement.src : '';

  const title = book.querySelector('.book-title').textContent;
  const priceText = book.querySelector('.book-price').textContent.replace(/[^\d.]/g, '');
  const price = parseFloat(priceText);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ title, price, quantity: 1, image: img }); 
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  const originalText = button.textContent;
  const originalBg = button.style.backgroundColor;
  const originalColor = button.style.color;

  button.textContent = 'Adding';
  button.style.backgroundColor = 'green';
  button.style.color = 'white';
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = `<a href="cart.html" style="color:white; text-decoration:none;">View Cart</a>`;
    button.style.backgroundColor = '#007BFF'; 
  }, 1000);

  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = originalBg;
    button.style.color = originalColor;
    button.disabled = false;
  }, 2500);
}

// Function to validate the Contact Us Form
function validateForm() {
  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.classList.remove('show');
  emailError.classList.remove('show');
  messageError.classList.remove('show');

  // Validate name
  if (name === "") {
    nameError.classList.add('show');
    isValid = false;
  }

  // Validate email (basic format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.classList.add('show');
    isValid = false;
  }

  // Validate message
  if (message === "") {
    messageError.classList.add('show');
    isValid = false;
  }

  // If valid, redirect to confirmation page
  if (isValid) {
    window.location.href = "contactus_confirmation.html";
  }

  return false; // prevent default form submission
}

document.addEventListener("DOMContentLoaded", function () {
  const booksPerPage = 15;
  const books = document.querySelectorAll(".book");
  const pagination = document.getElementById("pagination");

  console.log("Total books found:", books.length); 

  const totalPages = Math.ceil(books.length / booksPerPage);

  function showPage(page) {
    console.log("Showing page:", page); 

    books.forEach((book, index) => {
      if (index >= (page - 1) * booksPerPage && index < page * booksPerPage) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });

    const buttons = pagination.querySelectorAll("button");
    buttons.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === page - 1);
    });
  }

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.addEventListener("click", () => showPage(i));
      pagination.appendChild(btn);
    }
  }

  showPage(1);
});
