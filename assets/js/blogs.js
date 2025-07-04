document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    const searchInput = document.getElementById('searchInput');
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    document.querySelector('.section').appendChild(pagination);

    // Fetch data from JSON
    fetch('/assets/data/data.json')
        .then(response => response.json())
        .then(data => {
            let blogData = data.blogs;
            let blogsPerPage = window.innerWidth <= 768 ? 12 : 40;
            let currentPage = 1;

            function loadBlogContent(page = 1) {
                blogGrid.innerHTML = '';
                const start = (page - 1) * blogsPerPage;
                const end = start + blogsPerPage;
                const paginatedBlogs = blogData.slice(start, end);

                paginatedBlogs.forEach(blog => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${blog.image}" alt="${blog.title}" class="card-image">
                        <h3>${blog.title}</h3>
                        <p class="card-date">Date: ${blog.date}</p>
                        <p class="card-author">By: ${blog.author}</p>
                        <p>${blog.text}</p>
                        <a href="${blog.link}">Read Full Blog</a>
                    `;
                    blogGrid.appendChild(card);
                });

                updatePagination();
            }

            function updatePagination() {
                const pageCount = Math.ceil(blogData.length / blogsPerPage);
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
                        loadBlogContent(currentPage);
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
                        loadBlogContent(currentPage);
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
                        loadBlogContent(currentPage);
                    });
                    pagination.appendChild(lastButton);
                }
            }

            // Load initial blog content
            loadBlogContent(currentPage);

            // Search Functionality
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                filterContent(searchTerm);
            });

            function filterContent(term) {
                const filteredBlogs = blogData.filter(blog => 
                    blog.title.toLowerCase().includes(term) || 
                    blog.text.toLowerCase().includes(term)
                );
                blogGrid.innerHTML = '';
                filteredBlogs.slice(0, blogsPerPage).forEach(blog => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${blog.image}" alt="${blog.title}" class="card-image">
                        <h3>${blog.title}</h3>
                        <p class="card-date">Date: ${blog.date}</p>
                        <p class="card-author">By: ${blog.author}</p>
                        <p>${blog.text}</p>
                        <a href="${blog.link}">Read Full Blog</a>
                    `;
                    blogGrid.appendChild(card);
                });
                updatePaginationForSearch(filteredBlogs);
            }

            function updatePaginationForSearch(filteredBlogs) {
                const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
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
                        const start = (currentPage - 1) * blogsPerPage;
                        const end = start + blogsPerPage;
                        blogGrid.innerHTML = '';
                        filteredBlogs.slice(start, end).forEach(blog => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${blog.image}" alt="${blog.title}" class="card-image">
                                <h3>${blog.title}</h3>
                                <p class="card-date">Date: ${blog.date}</p>
                                <p class="card-author">By: ${blog.author}</p>
                                <p>${blog.text}</p>
                                <a href="${blog.link}">Read Full Blog</a>
                            `;
                            blogGrid.appendChild(card);
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
                        const start = (currentPage - 1) * blogsPerPage;
                        const end = start + blogsPerPage;
                        blogGrid.innerHTML = '';
                        filteredBlogs.slice(start, end).forEach(blog => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${blog.image}" alt="${blog.title}" class="card-image">
                                <h3>${blog.title}</h3>
                                <p class="card-date">Date: ${blog.date}</p>
                                <p class="card-author">By: ${blog.author}</p>
                                <p>${blog.text}</p>
                                <a href="${blog.link}">Read Full Blog</a>
                            `;
                            blogGrid.appendChild(card);
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
                        const start = (currentPage - 1) * blogsPerPage;
                        const end = start + blogsPerPage;
                        blogGrid.innerHTML = '';
                        filteredBlogs.slice(start, end).forEach(blog => {
                            const card = document.createElement('div');
                            card.className = 'card';
                            card.innerHTML = `
                                <img src="${blog.image}" alt="${blog.title}" class="card-image">
                                <h3>${blog.title}</h3>
                                <p class="card-date">Date: ${blog.date}</p>
                                <p class="card-author">By: ${blog.author}</p>
                                <p>${blog.text}</p>
                                <a href="${blog.link}">Read Full Blog</a>
                            `;
                            blogGrid.appendChild(card);
                        });
                    });
                    pagination.appendChild(lastButton);
                }
            }

            // Resize handler to adjust blogsPerPage
            window.addEventListener('resize', () => {
                const newBlogsPerPage = window.innerWidth <= 768 ? 12 : 40;
                if (newBlogsPerPage !== blogsPerPage) {
                    blogsPerPage = newBlogsPerPage;
                    currentPage = 1;
                    loadBlogContent(currentPage);
                }
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});