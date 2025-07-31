document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split("/").pop();

  if (!currentPath) currentPath = "Homepage.html";

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split("/").pop();

    if (linkPath.toLowerCase().includes('login')){
      return;
    }

    // Hide homepage button if we are on Homepage.html
    if (linkPath === "Homepage.html" && currentPath === "Homepage.html") {
      link.style.display = "none";
    }

    // Highlight the current page
    if (linkPath === currentPath) {
      link.style.display = "none";
    }
  });
});

// Function to toggle the navigation menu on small screens
// This function toggles the visibility of the navigation menu when the hamburger icon is clicked
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Function to close the navigation menu when a link is clicked
// This function ensures that the menu closes on small screens when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 900){
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

// Function to handle dropdown menu toggle on mobile
// This function toggles the dropdown menu when clicked on small screens
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

// Function to handle sorting books
// This function sorts the books based on the selected criteria
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

// Function to handle adding a book to the cart
// This function adds the selected book to the cart and updates the local storage
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
// This function checks the form inputs and displays error messages if validation fails
function validateForm() {
  let isValid = true; // Assume the form is valid initially

  // Get the input values
  const name = document.getElementById('name').value.trim();          
  const email = document.getElementById('email').value.trim(); 
  const message = document.getElementById('message').value.trim();

  // Using getElementById to access the error message elements
  const nameError = document.getElementById('nameError');   
  const emailError = document.getElementById('emailError');   
  const messageError = document.getElementById('messageError');  

  nameError.classList.remove('show');       // Hide error messages initially
  emailError.classList.remove('show');      // Hide error messages initially 
  messageError.classList.remove('show');    // Hide error messages initially

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

// Function to handle pagination of books
// This function displays a limited number of books per page and allows navigation through pages
document.addEventListener("DOMContentLoaded", function () {
  const booksPerPage = 15;
  const books = document.querySelectorAll(".book");
  const pagination = document.getElementById("pagination");

  const totalPages = Math.ceil(books.length / booksPerPage);

  function showPage(page) {
    console.log("Showing page:", page);

    books.forEach((book, index) => {
      if (index >= (page - 1) * booksPerPage && index < page * booksPerPage) {
        book.style.display = "block";   // Show the book if it's in the current page range
      } else {
        book.style.display = "none";    // Hide the book if it's not in the current page range
      }
    });

    const buttons = pagination.querySelectorAll("button");
    buttons.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === page - 1);
    });


    window.scrollTo({
      top: 0,
      behavior: "smooth"  // Smooth scroll to top when changing pages
    });
  }

  // Create pagination buttons
  if (totalPages > 1) {   // Only create pagination if there are multiple pages
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.addEventListener("click", () => showPage(i));   // Show the selected page
      pagination.appendChild(btn);
    }
  }

  showPage(1);  // Show the first page by default
});
