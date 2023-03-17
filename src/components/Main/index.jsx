import ImagesWrapper from '../ImagesWrapper';
import './Main.css'

const photosProduct = [
    {
      photo:'./src/assets/images/image-product-1-thumbnail.jpg',
      main:'assets/images/image-product-1.jpg',
      id:1
    },
    {
      photo:'./src/assets/images/image-product-2-thumbnail.jpg',
      main:'assets/images/image-product-2.jpg',
      id:2
    },
    {
      photo:'./src/assets/images/image-product-3-thumbnail.jpg',
      main:'assets/images/image-product-3.jpg',
      id:3
    },
    {
      photo:'./src/assets/images/image-product-4-thumbnail.jpg',
      main:'assets/images/image-product-4.jpg',
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