import React, { useState } from "react";
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.JPG';
import Img4 from '../img/img4.JPG';
import Img5 from '../img/img5.jpg';
import Img6 from '../img/img6.jpg';
import Img7 from '../img/img7.jpg';
import Img8 from '../img/img8.jpg';
import Img9 from '../img/img9.jpg';
import Footer from "../global/Footer";

const Gallery = () => {
    let data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 }
    ];

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    return (
        <>
        <h1 style={{textAlign:'center', fontFamily:'initial'}}>Gallery</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="Expanded view" />
                <CloseIcon onClick={() => setModel(false)} /> 
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={`Gallery item ${item.id}`} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default Gallery;
