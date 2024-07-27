import React from 'react';
import '../css/aboutus.css';

function AboutUs() {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <div className="about-content">
                <section className="about-section">
                    <img src="mission.jpg" alt="Our Mission" />
                    <h2>Our Mission</h2>
                    <p>
                        At BidSpirit, our mission is to connect collectors and enthusiasts with unique and valuable items from around the world. We strive to create an accessible, efficient, and enjoyable online auction experience for all our users.
                    </p>
                </section>
                <section className="about-section">
                    <img src="story.webp" alt="Our Story" />
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2020, BidSpirit has quickly become a leading platform for online auctions. Our team consists of experts in various fields, including art, antiques, collectibles, and more. We are passionate about bringing the auction house experience to the digital world, making it easier for everyone to participate and find their next treasure.
                    </p>
                </section>
                <section className="about-section">
                    <img src="offer.webp" alt="What We Offer" />
                    <h2>What We Offer</h2>
                    <p>
                        BidSpirit offers a wide range of auction categories, including:
                    </p>
                    <ul>
                        <li>Upcoming Auctions</li>
                        <li>Private Sales</li>
                        <li>Antiques</li>
                        <li>Furniture</li>
                        <li>Collectibles</li>
                    </ul>
                    <p>
                        Our platform provides detailed descriptions, high-quality images, and reliable information to ensure you have all the details you need before placing a bid.
                    </p>
                </section>
                <section className="about-section">
                    <img src="offer2.webp" alt="Join Us" />
                    <h2>Join Us</h2>
                    <p>
                        Whether you are a seasoned collector or just starting, BidSpirit welcomes you. Join our community today and discover the excitement of online auctions.
                    </p>
                </section>
                <section className="about-section">
                    <img src="value.webp" alt="Our Values" />
                    <h2>Our Values</h2>
                    <p>
                        Integrity, transparency, and customer satisfaction are at the core of everything we do. We believe in building long-lasting relationships with our clients based on trust and mutual respect.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;
