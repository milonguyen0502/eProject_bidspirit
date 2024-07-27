import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/UpcomingPage.css';
import SlideShow from "./SlideShow";

function ProductMenu({ auctions, privateSale, antiQue, furniTure, collecTible }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentList, setCurrentList] = useState([]);
    const [filters, setFilters] = useState({
        sortBy: '',
        dateFrom: '',
        dateTo: '',
        locations: [],
        exhibitions: [],
        categories: [],
        sales: []
    });
    const [showMoreLocations, setShowMoreLocations] = useState(false); 
    const [showMoreExhibitions, setShowMoreExhibitions] = useState(false); 
    const [showMoreCategories, setShowMoreCategories] = useState(false); 
    const [showMoreSales, setShowMoreSales] = useState(false); 
    const [searchTerm, setSearchTerm] = useState('');
    const [pageTitle, setPageTitle] = useState('Upcoming Auction');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const type = searchParams.get('type');

        if (type === 'auctions') {
            setCurrentList(auctions);
            setPageTitle('Upcoming Auction');
        } else if (type === 'privateSale') {
            setCurrentList(privateSale);
            setPageTitle('Private Sale');
        } else if (type === 'antique') {
            setCurrentList(antiQue);
            setPageTitle('Antique Collection');
        } else if (type === 'furniture') {
            setCurrentList(furniTure);
            setPageTitle('Furniture Collection');
        } else if (type === 'collectibles') {
            setCurrentList(collecTible);
            setPageTitle('Collectibles');
        }
    }, [location, auctions, privateSale, antiQue, furniTure, collecTible]);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const prevList = filters[name];
        let updatedList = [];

        if (checked) {
            updatedList = [...prevList, name];
        } else {
            updatedList = prevList.filter(item => item !== name);
        }

        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: updatedList
        }));
    };

    const applyFilters = () => {
        console.log('Filters applied:', filters);
    };

    const navigateToProductDetail = (product) => {
        navigate(`/product/${product.id}`);
    };

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredList = currentList.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderLocationCheckboxes = () => {
        const locations = [
            'New York', 'London', 'Paris', 'Tokyo', 'Hong Kong'
        ];
        return locations.map((location, index) => {
            if (!showMoreLocations && index >= 2) return null;
            return (
                <div key={location}>
                    <label>
                        <input
                            type="checkbox"
                            name={location}
                            checked={filters.locations.includes(location)}
                            onChange={handleCheckboxChange}
                        />
                        {location}
                    </label>
                </div>
            );
        });
    };

    const renderExhibitionCheckboxes = () => {
        const exhibitions = [
             'New York', 'London', 'Paris', 'Tokyo', 'Hong Kong'
        ];
        return exhibitions.map((exhibition, index) => {
            if (!showMoreExhibitions && index >= 2) return null;
            return (
                <div key={exhibition}>
                    <label>
                        <input
                            type="checkbox"
                            name={exhibition}
                            checked={filters.exhibitions.includes(exhibition)}
                            onChange={handleCheckboxChange}
                        />
                        {exhibition}
                    </label>
                </div>
            );
        });
    };

    const renderCategoryCheckboxes = () => {
        const categories = [
            'Contemporary Art', 'Impressionist & Modern Art', 'Jewelry', 'Watches', 'Wine', '19th Century European Paintings'
        ];
        return categories.map((category, index) => {
            if (!showMoreCategories && index >= 2) return null;
            return (
                <div key={category}>
                    <label>
                        <input
                            type="checkbox"
                            name={category}
                            checked={filters.categories.includes(category)}
                            onChange={handleCheckboxChange}
                        />
                        {category}
                    </label>
                </div>
            );
        });
    };

    const renderSaleTypeCheckboxes = () => {
        const sales = [
            'Exhibition', 'Live', 'Online Only'
        ];
        return sales.map((sale, index) => {
            if (!showMoreSales && index >= 2) return null;
            return (
                <div key={sale}>
                    <label>
                        <input
                            type="checkbox"
                            name={sale}
                            checked={filters.sales.includes(sale)}
                            onChange={handleCheckboxChange}
                        />
                        {sale}
                    </label>
                </div>
            );
        });
    };

    return (
        <div>
            <h1 className="title-page">{pageTitle}</h1>
            <SlideShow />
            <div className="product-list">
                <div className="product-filter">
                    <p>SHOWING {filteredList.length} RESULT{filteredList.length !== 1 ? 'S' : ''}</p>
                    <hr />
                    <h4>SORT BY</h4>
                    <div>
                        <label>
                            <input type="radio" name="sortBy" value="endDateAsc" onChange={handleFilterChange} />
                            End Date - Ascending
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="sortBy" value="endDateDesc" onChange={handleFilterChange} />
                            End Date - Descending
                        </label>
                    </div>
                    <hr />
                    <h4>DATE</h4>
                    <p>From</p>
                    <input type="date" name="dateFrom" value={filters.dateFrom} onChange={handleFilterChange} />
                    <p>To</p>
                    <input type="date" name="dateTo" value={filters.dateTo} onChange={handleFilterChange} />
                    <hr />
                    <h4>Location</h4>
                    {renderLocationCheckboxes()}
                    {!showMoreLocations && (
                        <button className="show-more-button" onClick={() => setShowMoreLocations(true)}>Show More</button>
                    )}
                    {showMoreLocations && (
                        <button className="show-less-button" onClick={() => setShowMoreLocations(false)}>Show Less</button>
                    )}
                    <hr />
                    <h4>Exhibition</h4>
                    {renderExhibitionCheckboxes()}
                    {!showMoreExhibitions && (
                        <button className="show-more-button" onClick={() => setShowMoreExhibitions(true)}>Show More</button>
                    )}
                    {showMoreExhibitions && (
                        <button className="show-less-button" onClick={() => setShowMoreExhibitions(false)}>Show Less</button>
                    )}
                    <hr />
                    <h4>Categories</h4>
                    {renderCategoryCheckboxes()}
                    {!showMoreCategories && (
                        <button className="show-more-button" onClick={() => setShowMoreCategories(true)}>Show More</button>
                    )}
                    {showMoreCategories && (
                        <button className="show-less-button" onClick={() => setShowMoreCategories(false)}>Show Less</button>
                    )}
                    <hr />
                    <h4>Sale Type</h4>
                    {renderSaleTypeCheckboxes()}
                    {!showMoreSales && (
                        <button className="show-more-button" onClick={() => setShowMoreSales(true)}>Show More</button>
                    )}
                    {showMoreSales && (
                        <button className="show-less-button" onClick={() => setShowMoreSales(false)}>Show Less</button>
                    )}
                    <hr />
                    <button onClick={applyFilters}>APPLY FILTERS</button>
                </div>
                <div>
                <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                        className="search-input"
                    />
                     <div className="product-menu">
                    {filteredList.map((item, index) => (
                        <div key={index} className="product-item" onClick={() => navigateToProductDetail(item)}>
                            <img src={item.img} alt={item.name} />
                            <div className="product-details">
                                <h3>{item.name}</h3>
                                <p>{item.time}</p>
                                <button>VIEW AUCTION</button>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default ProductMenu;
