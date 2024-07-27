import React, { useState, useRef } from 'react';
import '../css/UpcomingAuction.css';
import { useNavigate } from 'react-router-dom';

const Furniture = ({furniTure}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const auctionListRef = useRef(null);
    const itemWidth = 295;
    const [showButton, setShowButton] = useState(false);
    const navigate = useNavigate();

    const calculateTransformValue = () => {
        if (auctionListRef.current && furniTure.length > 0) {
            const visibleItems = Math.floor(auctionListRef.current.offsetWidth / itemWidth);
            const maxTranslateX = (furniTure.length - visibleItems) * itemWidth;
            const translateX = currentIndex * itemWidth;
            return Math.min(translateX, maxTranslateX);
        }
        return 0;
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === furniTure.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? furniTure.length - 1 : prevIndex - 1));
    };

    const handleViewMore = (id) => {
        console.log(id);
        navigate(`/product/${id}`);
    };  
    const handleViewCategory = () => {
        navigate('/productmenu?type=furniture');
    };
    return (
        <div className="auction-carousel">
            <div className="header">
                <h1>Furniture</h1>
                <button className="view-category-btn" onClick={handleViewCategory}>View Category</button>
            </div>
            <div className="auction-list-wrapper" ref={auctionListRef}>
                <div className="auction-list" style={{ transform: `translateX(-${calculateTransformValue()}px)` }}>
                    {furniTure.map((auction, index) => (
                        <div key={index} className={`auction-item ${index === currentIndex ? 'active' : ''}`}
                            onMouseEnter={() => setShowButton(true)}
                            onMouseLeave={() => setShowButton(false)}
                            onClick={() => handleViewMore(auction.id)}>
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

export default Furniture;
