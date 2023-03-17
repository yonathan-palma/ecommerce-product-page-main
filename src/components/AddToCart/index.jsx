import { useState } from 'react';
import plus from '../../assets/images/icon-plus.svg';
import minus from '../../assets/images/icon-minus.svg';
import btncart from '../../assets/images/icon-cart.svg';
import './AddToCart.css'

export default function AddToCart({addItem, cartsItem}){

    const [amount, setAmount] = useState(0);
    
    const handlerAddCart=()=>{
        amount > 0 && addItem((amount + cartsItem));
        setAmount(0);
    }

    return(
        <div className="AddToCart">
            <div className="inc_dec_button">
                <button type="button" onClick={()=>amount>0 && setAmount(amount-1)} >
                    <img src={minus}  alt="menos" />
                </button>
                <div className="item_amount">
                    {amount}
                </div>
                <button type="button" onClick={()=> setAmount(amount + 1)}>
                    <img src={plus} alt="plus" />
                </button>
            </div>
            <div className="add_cart">
                <button type="button" className="btn_add_cart" onClick={handlerAddCart}>
                    <img src={btncart} alt="Cart" />
                    Add to cart
                </button>
            </div>
        </div>
    )
}