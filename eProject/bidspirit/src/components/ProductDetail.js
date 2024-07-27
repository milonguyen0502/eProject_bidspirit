import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/ProductDetail.css';
    

const ProductDetail = ({ privateSale, auctions, antiQue, collecTible, furniTure, handleAddcart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const auction = auctions.find(auction => auction.id === parseInt(id)) || privateSale.find(sale => sale.id === parseInt(id)) || antiQue.find(antique => antique.id === parseInt(id)) || furniTure.find(fur => fur.id === parseInt(id)) || collecTible.find(coll => coll.id === parseInt(id));
    const [mainImage, setMainImage] = useState(auction ? auction.img : '');
    const [showDescription, setShowDescription] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [buttonText, setButtonText] = useState('Add to Cart');

    if (!auction) {
        return <div>Product not found</div>;
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };
    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    const handleButtonClick = () => {
        if (buttonText === 'Add to Cart') {
            setButtonText('Checking Cart');
            handleAddcart(auction);
        } else if (buttonText === 'Checking Cart') {
            navigate('/cart'); 
        }
    };

    return (
        <div>
            <h1>{auction.name}</h1>
            <div className="product-detail-container">
                <div className="product-detail">
                    <div className="image-gallery">
                        <div className="thumbnails">
                            {auction.thumbnails.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="thumbnail"
                                    onClick={() => setMainImage(thumbnail)}
                                />
                            ))}
                        </div>
                        <img src={mainImage} alt={auction.name} className="large-image" />
                    </div>
                    <div className="content-detail">
                        <h1>{auction.name}</h1>
                        <h3>{auction.price}$</h3>
                        <p>{auction.time}</p>
                        <button onClick={handleButtonClick}>{buttonText}</button>
                        <p><i class="fa fa-globe" aria-hidden="true"></i> International shipping available</p>
                        <p><i class="fa fa-calculator" aria-hidden="true"></i> Taxes not included</p>
                        <p><i class="fa fa-star-o" aria-hidden="true"></i> Authenticity guaranteed</p>
                    </div>    
                </div>
            </div>
            <div className="lot-details">
                <h1>Lot Details</h1>
                <div className='toganddetail'>
                    <button onClick={toggleDescription} className="description-toggle">
                        <i className={`fa ${showDescription ? 'fa-caret-up' : 'fa-caret-down'}`} aria-hidden="true"></i>
                    </button>
                    {showDescription && (
                        <div id="description">
                            <h3>Description</h3>
                            <p>{auction.description}</p>
                        </div>
                    )}
                </div>
                <div className='toganddetail'>
                    <button onClick={toggleDetail} className="description-toggle">
                        <i className={`fa ${showDetail ? 'fa-caret-up' : 'fa-caret-down'}`} aria-hidden="true"></i>
                    </button>
                    {showDetail && (
                        <div id="description">
                            <h3>Information</h3>
                            <p>{auction.detail}</p>
                        </div>
                    )}
                </div>
                
            </div>

        </div>
    );
};

export default ProductDetail;
