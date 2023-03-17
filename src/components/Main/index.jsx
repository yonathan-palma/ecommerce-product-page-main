import ImagesWrapper from '../ImagesWrapper';
import './Main.css'
import product1 from '../../assets/images/image-product-1.jpg';
import productth1 from '../../assets/images/image-product-1-thumbnail.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import productth2 from '../../assets/images/image-product-2-thumbnail.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import productth3 from '../../assets/images/image-product-3-thumbnail.jpg';
import product4 from '../../assets/images/image-product-4.jpg';
import productth4 from '../../assets/images/image-product-4-thumbnail.jpg';

const photosProduct = [
    {
      photo: productth1 ,
      main: product1,
      id:1
    },
    {
      photo:productth2,
      main:product2,
      id:2
    },
    {
      photo:productth3,
      main:product3,
      id:3
    },
    {
      photo:productth4 ,
      main:product4,
      id:4
    }
];

export default function Main({children}){

    return(
        <main className="product">
          <ImagesWrapper images={photosProduct} isModal={false}  />
          <div className="product_description">
            <p className='company_name'>SNEAKER COMPANY</p>
            <h2 className='title_product'>Fall Limited Edition Sneakers</h2>
            <p className='item-detail'>
              These low-profile sneakers are your perfect casual wear companion. Featuring 
              a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price_content">
              <div className="price">
                <span>$</span>125.00 <span className='descuento'>50%</span>
              </div>
              <span className='old_price'>$250.00</span>
            </div>
            {children}
          </div>
        </main>
    )
}