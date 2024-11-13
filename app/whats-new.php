<?php include 'include/header-2.php'?>
<head>
    <title>What's New</title>
    <link rel="stylesheet"href="./CSS/whats-new.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
</head>
<section id="what" name="what">
    <header>
        <h1>What's New</h1>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
    </header>
    <div id="newsContainer" class="news-grid">
        <!-- News articles will be dynamically added here -->
    </div>
    <button id="loadMore">Load More News</button>
  </section>
  </body>
    <script>
        const newsArticles = [
            {
                title: "New Technology Breakthrough",
                content: "Scientists have made a groundbreaking discovery in quantum computing, potentially revolutionizing the field of cryptography.",
                image: "./images/wp1.jpg"
            },
            {
                title: "Global Climate Summit Announced",
                content: "World leaders are set to meet next month to discuss urgent measures to combat climate change and reduce carbon emissions.",
                image: "./images/wp2.jpg"
            },
            {
                title: "Stock Market Reaches New Heights",
                content: "The S&P 500 index has hit a record high, reflecting growing investor confidence in the economic recovery.",
                image: "./images/wp3.jpg"
            },
            {
                title: "Breakthrough in Renewable Energy",
                content: "Researchers have developed a new type of solar panel that can generate electricity even at night, potentially solving intermittency issues.",
                image: "./images/wp4.jpg"
            },
            {
                title: "Space Tourism Takes Off",
                content: "The first commercial space flight with tourists has successfully launched, marking a new era in space exploration and travel.",
                image: "./images/wp5.jpg"
            }
        ];

        let currentArticleIndex = 0;

        function addNewsArticle() {
            if (currentArticleIndex < newsArticles.length) {
                const article = newsArticles[currentArticleIndex];
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-content">
                        <h2>${article.title}</h2>
                        <p>${article.content}</p>
                    </div>
                `;
                document.getElementById('newsContainer').appendChild(articleElement);
                currentArticleIndex++;
            }
            if (currentArticleIndex >= newsArticles.length) {
                document.getElementById('loadMore').style.display = 'none';
            }
        }

        document.getElementById('loadMore').addEventListener('click', addNewsArticle);

        // Load the first two articles on page load
        addNewsArticle();
        addNewsArticle();
    </script>
    <!--Start of Tawk.to Script-->
<?php include 'include/footer.php'?>