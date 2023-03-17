import { useState } from "react"
import cartIcon from "../../assets/images/icon-cart.svg"
import User from "../../assets/images/image-avatar.png";
import deleteIcon from '../../assets/images/icon-delete.svg';
import './Cart.css'

export default function Cart({cartsItem, removeItems}){
    const [cartDetail, setCartDetail] = useState(false);
    const isEmpty = cartsItem == 0 ? true : false;

    const product = {
        img:'./src/assets/images/image-product-1-thumbnail.jpg',
        title:'Fall Limited Edition Sneakers',
        price: 125,
        amount: cartsItem
    }

    return(<>
        <div className="profile">
            <button type="button" className="toggleCart" onClick={()=> setCartDetail(!cartDetail)}>
                {!isEmpty &&<span className="cart_items_count">{cartsItem}</span>}
                <img src={cartIcon} className="cartIcon" alt="Cart Icon" />
            </button>  
            <img src={User} className="userAvatar" alt="User" />
        </div>
        {cartDetail &&
            <div className="cart-detail">
                <div className="cartTitle">
                    <h3>Cart</h3>
                </div>
                <div className="cartItems">
                    {
                        isEmpty ? <p className="isEmpty">Your Cart is empty.</p>:
                        //
                        <div>
                            <ul>
                                <li>
                                    <img className="attachment_img" src={product.img} alt="imagen" />
                                    <div className="productDetail">
                                        <p className="cart_item_title">{product.title}</p>
                                        <div className="price">
                                            <span>$</span>{product.price}.00
                                            <span className="quantity">
                                                x {product.amount}
                                                <span className="amount">  ${(product.amount * product.price)}.00</span>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="deleteIcon" onClick={removeItems}>
                                        <img src={deleteIcon} alt="deleteIcon" role="button" />
                                    </span>
                                </li>
                            </ul>
                            <button type="button" className="Checkout">
                                Checkout
                            </button>
                        </div>
                        
                    }
                    
                </div>
            </div>
        }
    </>)
}