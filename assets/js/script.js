const search = document.querySelector('.fa-search'),
     searchContainer = document.querySelector('.search-container'),
     menuBtn = document.querySelector('.fa-bars'),
     navLinks = document.querySelector('.nav-links'),
     closeBtn = document.querySelector('.fa-close');

search.addEventListener('click', () => {
    searchContainer.classList.toggle('show');
    navLinks.classList.remove('dis');
    if(searchContainer.classList.contains('show')){
        return search.classList.replace('fa-search','fa-times');
    }
    search.classList.replace('fa-times','fa-search');
})

menuBtn.addEventListener('click', () => {
    if(searchContainer.classList.contains('show')) {
        navLinks.classList.add('dis');
        searchContainer.classList.remove('show');
        return search.classList.replace('fa-times','fa-search');
    }
})

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('dis');
})