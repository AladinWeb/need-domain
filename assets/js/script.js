document.addEventListener('DOMContentLoaded', async () => {
    // Fetch and display content
    const blogGrid = document.getElementById('blogGrid');
    const analysisGrid = document.getElementById('analysisGrid');
    const solutionsGrid = document.getElementById('solutionsGrid');

    try {
        const response = await fetch('/assets/data/data.json');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Blogs Section: Exactly 4 latest
        const latestBlogs = data.blogs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
        blogGrid.innerHTML = '';
        latestBlogs.forEach(blog => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${blog.image}" alt="${blog.title}" class="card-image">
                <h3>${blog.title}</h3>
                <p>Date: ${blog.date}</p>
                <p>Author: ${blog.author}</p>
                <p>${blog.text}</p>
                <a href="${blog.link}">Read Full Blog</a>
            `;
            blogGrid.appendChild(card);
        });

        // Analysis Section: Exactly 4 latest
        const latestAnalyses = data.analyses
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
        analysisGrid.innerHTML = '';
        latestAnalyses.forEach(analysis => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${analysis.image}" alt="${analysis.title}" class="card-image">
                <h3>${analysis.title}</h3>
                <p>Date: ${analysis.date}</p>
                <p>Author: ${analysis.author}</p>
                <p>${analysis.text}</p>
                <a href="${analysis.link}">Read Full Blog</a>
            `;
            analysisGrid.appendChild(card);
        });

        // Solutions Section: Exactly 4 latest
        const latestSolutions = data.solutions
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
        solutionsGrid.innerHTML = '';
        latestSolutions.forEach(solution => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${solution.image}" alt="${solution.title}" class="card-image">
                <h3>${solution.title}</h3>
                <p>Date: ${solution.date}</p>
                <p>Author: ${solution.author}</p>
                <p>${solution.text}</p>
                <a href="${solution.link}">Read Full Information</a>
            `;
            solutionsGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        blogGrid.innerHTML = '<p>Error loading blog posts. Please try again later.</p>';
        analysisGrid.innerHTML = '<p>Error loading analysis posts. Please try again later.</p>';
        solutionsGrid.innerHTML = '<p>Error loading solutions. Please try again later.</p>';
    }
});