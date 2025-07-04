document.addEventListener('DOMContentLoaded', () => {
    const solutionsGrid = document.getElementById('solutionsGrid');
    const searchInput = document.getElementById('searchInput');
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    document.querySelector('.section').appendChild(pagination);

    // Fetch data from JSON
    fetch('/assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            let solutionsData = data.solutions;
            let itemsPerPage = window.innerWidth <= 768 ? 12 : 40;
            let currentPage = 1;

            function loadSolutionsContent(page = 1) {
                solutionsGrid.innerHTML = '';
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const paginatedItems = solutionsData.slice(start, end);

                paginatedItems.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="card-image">
                        <h3>${item.title}</h3>
                        <p class="card-date">Date: ${item.date}</p>
                        <p class="card-author">By: ${item.author}</p>
                        <p>${item.text}</p>
                        <a href="${item.link}">Read Full Solution</a>
                    `;
                    solutionsGrid.appendChild(card);
                });

                updatePagination();
            }

            function updatePagination() {
                const pageCount = Math.ceil(solutionsData.length / itemsPerPage);
                pagination.innerHTML = '';
                const maxButtons = window.innerWidth <= 768 ? 4 : 7;
                let startPage = Math.max(1, currentPage - Math.floor((maxButtons - 1) / 2));
                let endPage = Math.min(pageCount, startPage + maxButtons - 1);

                if (endPage === pageCount && endPage - startPage + 1 < maxButtons) {
                    startPage = Math.max(1, pageCount - maxButtons + 1);
                    endPage = pageCount;
                }

                if (startPage > 1 && startPage > 2) {
                    const firstButton = document.createElement('button');
                    firstButton.textContent = 1;
                    firstButton.className = currentPage === 1 ? 'active' : '';
                    firstButton.addEventListener('click', () => {
                        currentPage = 1;
                        loadSolutionsContent(currentPage);
                    });
                    pagination.appendChild(firstButton);

                    if (startPage > 3) {
                        const ellipsis = document.createElement('span');
                        ellipsis.textContent = '...';
                        ellipsis.style.margin = '0 0.5rem';
                        pagination.appendChild(ellipsis);
                    }
                }

                for (let i = startPage; i <= endPage; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    button.className = i === currentPage ? 'active' : '';
                    button.addEventListener('click', () => {
                        currentPage = i;
                        loadSolutionsContent(currentPage);
                    });
                    pagination.appendChild(button);
                }

                if (endPage < pageCount && endPage < pageCount - 1) {
                    const ellipsis = document.createElement('span');
                    ellipsis.textContent = '...';
                    ellipsis.style.margin = '0 0.5rem';
                    pagination.appendChild(ellipsis);
                    const lastButton = document.createElement('button');
                    lastButton.textContent = pageCount;
                    lastButton.className = currentPage === pageCount ? 'active' : '';
                    lastButton.addEventListener('click', () => {
                        currentPage = pageCount;
                        loadSolutionsContent(currentPage);
                    });
                    pagination.appendChild(lastButton);
                }
            }

            // Load initial solutions content
            loadSolutionsContent(currentPage);

            // Search Functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                filterContent(searchTerm);
            });

            function filterContent(term) {
                const filteredItems = solutionsData.filter(item => 
                    item.title.toLowerCase().includes(term) || 
                    item.text.toLowerCase().includes(term)
                );
                solutionsGrid.innerHTML = '';
                filteredItems.slice(0, itemsPerPage).forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" class="card-image">
                        <h3>${item.title}</h3>
                        <p class="card-date">Date: ${item.date}</p>
                        <p class="card-author">By: ${item.author}</p>
                        <p>${item.text}</p>
                        <a href="${item.link}">Read Full Solution</a>
                    `;
                    solutionsGrid.appendChild(card);
                });
                updatePaginationForSearch(filteredItems);
            }

            function updatePaginationForSearch(filteredItems) {
                const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
                pagination.innerHTML = '';
                const maxButtons = window.innerWidth <= 768 ? 4 : 7;
                let startPage = Math.max(1, currentPage - Math.floor((maxButtons - 1) / 2));
                let endPage = Math.min(pageCount, startPage + maxButtons - 1);

                if (endPage === pageCount && endPage - startPage + 1 < maxButtons) {
                    startPage = Math.max(1, pageCount - maxButtons + 1);
                    endPage = pageCount;
                }

                if (startPage > 1 && startPage > 2) {
                    const firstButton = document.createElement('button');
                    firstButton.textContent = 1;
                    firstButton.className = currentPage === 1 ? 'active' : '';
                    firstButton.addEventListener('click', () => {
                        currentPage = 1;
                        const start = (currentPage - 1) * itemsPerPage;
                        const end = start + itemsPerPage;
                        solutionsGrid.innerHTML = '';
                        filteredItems.slice(start, end).forEach(item => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${item.image}" alt="${item.title}" class="card-image">
                                <h3>${item.title}</h3>
                                <p class="card-date">Date: ${item.date}</p>
                                <p class="card-author">By: ${item.author}</p>
                                <p>${item.text}</p>
                                <a href="${item.link}">Read Full Solution</a>
                            `;
                            solutionsGrid.appendChild(card);
                        });
                    });
                    pagination.appendChild(firstButton);

                    if (startPage > 3) {
                        const ellipsis = document.createElement('span');
                        ellipsis.textContent = '...';
                        ellipsis.style.margin = '0 0.5rem';
                        pagination.appendChild(ellipsis);
                    }
                }

                for (let i = startPage; i <= endPage; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    button.className = i === currentPage ? 'active' : '';
                    button.addEventListener('click', () => {
                        currentPage = i;
                        const start = (currentPage - 1) * itemsPerPage;
                        const end = start + itemsPerPage;
                        solutionsGrid.innerHTML = '';
                        filteredItems.slice(start, end).forEach(item => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${item.image}" alt="${item.title}" class="card-image">
                                <h3>${item.title}</h3>
                                <p class="card-date">Date: ${item.date}</p>
                                <p class="card-author">By: ${item.author}</p>
                                <p>${item.text}</p>
                                <a href="${item.link}">Read Full Solution</a>
                            `;
                            solutionsGrid.appendChild(card);
                        });
                    });
                    pagination.appendChild(button);
                }

                if (endPage < pageCount && endPage < pageCount - 1) {
                    const ellipsis = document.createElement('span');
                    ellipsis.textContent = '...';
                    ellipsis.style.margin = '0 0.5rem';
                    pagination.appendChild(ellipsis);
                    const lastButton = document.createElement('button');
                    lastButton.textContent = pageCount;
                    lastButton.className = currentPage === pageCount ? 'active' : '';
                    lastButton.addEventListener('click', () => {
                        currentPage = pageCount;
                        const start = (currentPage - 1) * itemsPerPage;
                        const end = start + itemsPerPage;
                        solutionsGrid.innerHTML = '';
                        filteredItems.slice(start, end).forEach(item => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${item.image}" alt="${item.title}" class="card-image">
                                <h3>${item.title}</h3>
                                <p class="card-date">Date: ${item.date}</p>
                                <p class="card-author">By: ${item.author}</p>
                                <p>${item.text}</p>
                                <a href="${item.link}">Read Full Solution</a>
                            `;
                            solutionsGrid.appendChild(card);
                        });
                    });
                    pagination.appendChild(lastButton);
                }
            }

            // Resize handler to adjust itemsPerPage
            window.addEventListener('resize', () => {
                const newItemsPerPage = window.innerWidth <= 768 ? 12 : 40;
                if (newItemsPerPage !== itemsPerPage) {
                    itemsPerPage = newItemsPerPage;
                    currentPage = 1;
                    loadSolutionsContent(currentPage);
                }
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});