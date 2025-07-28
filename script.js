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

