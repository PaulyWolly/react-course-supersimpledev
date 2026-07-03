import './HomePage.css'
import './header.css'
import { products } from '../data/products'
import { Product } from '../components/Product'

export function HomePage() {

  fetch('http://localhost:3000/api/products')
    .then((response) => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Error:', error)
    })

  return (
    <>

      <title>Ecommerce Project</title>
      
      <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src="images/logo-white.png" alt="SuperSimpleDev" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" alt="SuperSimpleDev" />
          </a>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" alt="Search" />
          </button>
        </div>

        <div className="right-section">
          <a className="orders-link header-link" href="/orders">
            <span className="orders-text">Orders</span>
          </a>

          <a className="cart-link header-link" href="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" alt="Cart" />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}
