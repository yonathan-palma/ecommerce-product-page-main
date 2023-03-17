import { useState } from "react";
import ModalProduct from "../ModalProduct";
import btnRight from '../../assets/images/icon-next.svg';
import btnLeft from '../../assets/images/icon-previous.svg';
import { useMediaQuery } from "react-responsive";
import MediaQuery from 'react-responsive'
import "./ImagesWrapper.css"


export default function ImagesWrapper({images, isModal}){ 
    const [indexImg, setIndexImg] = useState(0)
    const mainImg = images[indexImg];
    const [RView, setRView] = useState(false);
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isMovile = useMediaQuery({ query: '(max-width: 768px)' });

    const handleRview =()=>{
        // console.log("handleRview");
        if (!isModal && isDesktop) {
            setRView(!RView);  
        }
            
    }

    return(<>  
        <div className="product_img">
            <div className="main_img">
                {(isModal || !isDesktop) && <button type="button"className="btnLeft" onClick={()=> setIndexImg((indexImg - 1))}>
                    <img src={btnLeft} alt="anterior" />
                </button>
                }
                <img className="img_principal" onClick={handleRview} src={`${mainImg.main}`} alt={`Product${mainImg.id}`} />
                {(isModal || !isDesktop) && <button type="button" className="btnRight" onClick={()=> setIndexImg((indexImg + 1))} >
                    <img src={btnRight} alt="siguiente" />
                </button>
                }
            </div>
            <MediaQuery minWidth={769}>
                <div className={`thumb_images ${isModal && 'thumb_images_modal'} `}>
                    {images.map((image, index)=>{
                        return(
                            <div className={indexImg == index ? "imgSelect" : null} key={`product${image.id}`}>
                                <img 
                                    onClick={()=> setIndexImg(index)}
                                    src={image.photo} 
                                    alt={`product${image.id}`} 
                                />
                            </div>
                        )
                        
                    })
                    }
                </div>
            </MediaQuery>          
        </div>
        {RView && <ModalProduct images={images} onclose={()=> setRView(false)} />}
    </>)

}
