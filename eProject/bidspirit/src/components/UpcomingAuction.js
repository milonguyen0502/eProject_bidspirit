import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UpcomingAuction.css';

const UpcomingAuction = ({auctions}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const auctionListRef = useRef(null);
    const itemWidth = 295;
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();


    const calculateTransformValue = () => {
        if (auctionListRef.current && auctions.length > 0) {
            const visibleItems = Math.floor(auctionListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (auctions.length - visibleItems) * itemWidth;
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === auctions.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? auctions.length - 1 : prevIndex - 1));
    };

    const handleViewMore = (id) => {
        navigate(`/product/${id}`);
        console.log("id")
    };  

    const handleViewCategory = () => {
        navigate('/productmenu?type=auctions');
    };

    return (
        <div className="auction-carousel">
            <div className="header">
                <h1>Upcoming Auction</h1>
                <button className="view-category-btn" onClick={handleViewCategory}>View Category</button>
            </div>
            <div className="auction-list-wrapper" ref={auctionListRef}>
                <div className="auction-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    {auctions.map((auction, index) => (
                        <div 
                            key={index} 
                            className={`auction-item ${index === currentIndex ? 'active' : ''}`}
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                            onClick={() => handleViewMore(auction.id)}
                        >
                            <img src={auction.img} alt={auction.name} />
                            <h3>{auction.name}</h3>
                            <p>{auction.time}</p>
                            <p>{auction.description}</p>
                            {showButton && (
                                <button className="view-more-button" onClick={() => handleViewMore(auction.id)}>View More</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <button className="nav-btn prev" onClick={prevSlide}>
                <i className="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button className="nav-btn next" onClick={nextSlide}>
                <i className="fa fa-angle-right" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default UpcomingAuction;
