import { createPortal } from "react-dom";
import ImagesWrapper from "../ImagesWrapper";
import './Modal.css'
import btnClose from '../../assets/images/icon-close.svg'


export default function ModalProduct({images, onclose}){
    return createPortal(
        <div className="ModalProduct">
            <div className="viewerImagesWrapper">
                <div className="btnClose">
                    <button type="button" onClick={onclose}><img src={btnClose}/></button>
                </div>
                <ImagesWrapper images={images} isModal={true} /> 
            </div>          
        </div>,
        document.body
    )
}