// App.js
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import ProductMenu from './components/ProductMenu';
import ProductDetail from './components/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import About from './components/AboutUs';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import EditPass from './components/EditPass';
import PersonalPage from './components/PersonalPage';
import Wallet from './components/Wallet';
import './App.css';
import BackToTop from './components/BackToTop';

function App() {
    const [language, setLanguage] = useState('EN');
    const [showInput, setShowInput] = useState(false);
    const [auctions, setAuctions] = useState([]);
    const [cart, setCart] = useState([]);
    const [privateSale, setPrivateSale] = useState([]);
    const [antique, setAntique] = useState([]);
    const [furniture, setFurniture] = useState([]);
    const [collectible, setCollectible] = useState([]);
    const [accList, setAccList] = useState([]);
    const [username, setUsername] = useState(localStorage.getItem('username') || '');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('UpcomingAuction.json');
                const data = await response.json();
                setAuctions(data);
            } catch (error) {
                console.error('Error fetching auctions data:', error);
            }
        };

        fetchAuctions();
    }, []);

    useEffect(() => {
        const fetchPrivateSales = async () => {
            try {
                const response = await fetch('PrivateSales.json');
                const data = await response.json();
                setPrivateSale(data);
            } catch (error) {
                console.error('Error fetching private sales data:', error);
            }
        };

        fetchPrivateSales();
    }, []);

    useEffect(() => {
        const fetchAntiques = async () => {
            try {
                const response = await fetch('Antique.json');
                const data = await response.json();
                setAntique(data);
            } catch (error) {
                console.error('Error fetching antique data:', error);
            }
        };

        fetchAntiques();
    }, []);

    useEffect(() => {
        const fetchFurniture = async () => {
            try {
                const response = await fetch('Furniture.json');
                const data = await response.json();
                setFurniture(data);
            } catch (error) {
                console.error('Error fetching furniture data:', error);
            }
        };

        fetchFurniture();
    }, []);

    useEffect(() => {
        const fetchCollectibles = async () => {
            try {
                const response = await fetch('Collectibles.json');
                const data = await response.json();
                setCollectible(data);
            } catch (error) {
                console.error('Error fetching collectibles data:', error);
            }
        };

        fetchCollectibles();
    }, []);

    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await fetch('account.json');
                const data = await response.json();
                setAccList(data);
            } catch (error) {
                console.error('Error fetching account data:', error);
            }
        };

        fetchAccounts();
    }, []);

    const checkLogin = (username, password) => {
        const acc = accList.find((acc) => acc.username === username && acc.password === password);
        if (acc) {
            localStorage.setItem('username', username);
            setUsername(username);
            navigate('/');
            alert('Login successful!');
        } else {
            alert('Incorrect username or password!');
        }
    };

    const handleSignup = (newUsername, newPassword) => {
        const newAccount = { username: newUsername, password: newPassword };
        setAccList([...accList, newAccount]);
        alert('Signup successful! Please log in.');
        navigate('/login');
    };

    const handleEditPass = (username, newPassword) => {
        setAccList(accList.map(acc => acc.username === username ? { ...acc, password: newPassword } : acc));
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername('');
        setShowUserMenu(false);
        navigate('/');
    };
    const handleAddcart = (pro) => {
      setCart([...cart, pro]);
    }
    const handleDelete = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart); 
    };
    return (
        <div className="App">
            <ScrollToTop />
            <nav>
                <Link to="/">
                    <img src="logo.png" alt="logo" className="logo" />
                </Link>
                <ul className="nav-links">
                    <li className="dropdown-categories">
                        <Link to="/">CATEGORIES</Link>
                        <div className="dropdown-content">
                            <Link to="/productmenu?type=auctions">Upcoming Auction</Link>
                            <Link to="/productmenu?type=privateSale">Private Sale</Link>
                            <Link to="/productmenu?type=antique">Antique</Link>
                            <Link to="/productmenu?type=furniture">Furniture</Link>
                            <Link to="/productmenu?type=collectibles">Collectibles</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="/buy-now">BUY NOW</Link>
                    </li>
                    <li>
                        <Link to="/sell">SELL</Link>
                    </li>
                </ul>
                <div className="search-container">
                    <i className="fa fa-search search-icon" onClick={() => setShowInput(!showInput)}></i>
                    <div className={`input-wrapper ${showInput ? 'show' : ''}`}>
                        <input className={`nav-input ${showInput ? 'show' : ''}`} placeholder="Search" />
                        {showInput && (
                            <button className="close-icon" onClick={() => setShowInput(false)}>
                                &times;
                            </button>
                        )}
                    </div>
                </div>
                <div className="btn-nav">
                    <button onClick={() => setLanguage(language === 'EN' ? 'VN' : 'EN')}>{language}</button>
                    {username ? (
    <div className="dropdown-user">
        <button onClick={() => setShowUserMenu(!showUserMenu)}>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </button>
        {showUserMenu && (
            <div className="dropdown-content">
                <p className="username-display">{username}</p>
                <Link to="/personal-page">Profile</Link>
                <Link to="/wallet">Wallet</Link>
                <Link onClick={handleLogout}>Logout</Link>
            </div>
        )}
    </div>
) : (
    <Link to="/login">
        <button>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </button>
    </Link>
)}

                    <Link to="/cart">
                        <button>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                    </Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home auctions={auctions} privateSale={privateSale} antiQue={antique} furniTure={furniture} collecTible={collectible} />} />
                <Route path="/product/:id" element={<ProductDetail auctions={auctions} privateSale={privateSale} antiQue={antique} furniTure={furniture} collecTible={collectible} handleAddcart={handleAddcart} />} />
                <Route path="/productmenu" element={<ProductMenu auctions={auctions} privateSale={privateSale} antiQue={antique} furniTure={furniture} collecTible={collectible} />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart cart={cart} handleDelete={handleDelete} />} />
                <Route path="/login" element={<Login checkLogin={checkLogin} />} />
                <Route path="/signup" element={<Signup handleSignup={handleSignup} />} />
                <Route path="/editpassword" element={<EditPass handleEditPass={handleEditPass} />} />
                <Route path="/personal-page" element={<PersonalPage />} />
                <Route path="/wallet" element={<Wallet />} />
            </Routes>
            <Footer />
            <BackToTop/>
        </div>
    );
}

export default App;
