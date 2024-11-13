<?php include 'include/header-2.php' ?>
    <title>Events</title>
    <link rel="stylesheet" href="./CSS/event.css">
</head>

<div class="hero">
    <div class="hero-content">
        <h1>Discover Amazing Events</h1>
        <p>Find and join exciting events in your area</p>
    </div>
</div>

<div class="container-event">
    <div class="event-filters">
        <button class="filter-btn">All Events</button>
        <button class="filter-btn">Music</button>
        <button class="filter-btn">Sports</button>
        <button class="filter-btn">Technology</button>
        <button class="filter-btn">Art</button>
    </div>

    <div class="events-grid">
        <div class="event-card">
            <img src="./images/musical.jpg" alt="Music Festival" class="event-image">
            <div class="event-details">
                <div class="event-date">Jul 15, 2024</div>
                <h2 class="event-title">Summer Music Festival</h2>
                <p class="event-description">Join us for an unforgettable day of music, featuring top artists and amazing performances.</p>
                <div class="event-meta">
                    <span class="event-location">Central Park</span>
                    <span class="event-price">$49</span>
                </div>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>

        <div class="event-card">
            <img src="./images/innovation-summit.jpg" alt="Tech Conference" class="event-image">
            <div class="event-details">
                <div class="event-date">Aug 22, 2024</div>
                <h2 class="event-title">Tech Innovation Summit</h2>
                <p class="event-description">Explore the latest in technology with industry leaders and innovative showcases.</p>
                <div class="event-meta">
                    <span class="event-location">Convention Center</span>
                    <span class="event-price">$99</span>
                </div>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>

        <div class="event-card">
            <img src="./images/art-exhibition.jpg" alt="Art Exhibition" class="event-image">
            <div class="event-details">
                <div class="event-date">Sep 5, 2024</div>
                <h2 class="event-title">Modern Art Exhibition</h2>
                <p class="event-description">Experience contemporary art from talented artists around the world.</p>
                <div class="event-meta">
                    <span class="event-location">City Gallery</span>
                    <span class="event-price">Free</span>
                </div>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>

        <div class="event-card">
            <img src="./images/traditional-event.jpg" alt="traditional events" class="event-image">
            <div class="event-details">
                <div class="event-date">Sep 5, 2024</div>
                <h2 class="event-title">Traditional Events</h2>
                <p class="event-description">Experience contemporary art from talented artists around the world.</p>
                <div class="event-meta">
                    <span class="event-location">City Gallery</span>
                    <span class="event-price">Free</span>
                </div>
                <a href="#" class="register-btn">Register Now</a>
            </div>
        </div>
    </div>

    <div class="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest events and exclusive offers</p>
        <form class="newsletter-form">
            <input type="email" placeholder="Enter your email">
            <button type="submit">Subscribe</button>
        </form>
    </div>
</div>
<?php include 'include/footer.php' ?>