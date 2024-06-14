import React, { useState } from "react";
import './Gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Divider } from '@mui/material';
import Img1 from './../assets/img/img1.jpg';
import Img2 from './../assets/img/img2.JPG';
import Img4 from './../assets/img/img4.JPG';
import Img5 from './../assets/img/img5.jpg';
import Img6 from './../assets/img/img6.jpg';
import Img7 from './../assets/img/img7.jpg';
import Img8 from './../assets/img/img8.jpg';
import Img9 from './../assets/img/img9.jpg';
import Img10 from './../assets/img/img10.jpg';
import Img11 from './../assets/img/img11.jpg';
import Img12 from './../assets/img/img12.jpg';
import Img13 from './../assets/img/img13.jpg';
import Img14 from './../assets/img/img14.jpg';
import Img15 from './../assets/img/img15.jpg';
import Img16 from './../assets/img/img16.jpg';
import Img17 from './../assets/img/img17.jpg';
import Img18 from './../assets/img/img18.jpg';
import Img19 from './../assets/img/img19.jpg';
import Img20 from './../assets/img/img20.jpg';
import Img21 from './../assets/img/img21.jpg';
import Img22 from './../assets/img/img22.jpg';
import Img23 from './../assets/img/img23.jpg';
import Img24 from './../assets/img/img24.jpg';
import Img25 from './../assets/img/img25.jpg';
import Footer from "../global/Footer";
import Header from "./Header";

const Gallery = () => {
    let data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 },
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img13 },
        { id: 14, imgSrc: Img14 },
        { id: 15, imgSrc: Img15 },
        { id: 16, imgSrc: Img16 },
        { id: 17, imgSrc: Img17 },
        { id: 18, imgSrc: Img18 },
        { id: 19, imgSrc: Img19 },
        { id: 20, imgSrc: Img20 },
        { id: 21, imgSrc: Img21 },
        { id: 22, imgSrc: Img22 },
        { id: 23, imgSrc: Img23 },
        { id: 24, imgSrc: Img24 },
        { id: 25, imgSrc: Img25 }
    ];

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const getImg = (imgSrc, index) => {
        setTempImgSrc(imgSrc);
        setCurrentIndex(index);
        setModel(true);
    };

    const nextImg = () => {
        const nextIndex = (currentIndex + 1) % data.length;
        setTempImgSrc(data[nextIndex].imgSrc);
        setCurrentIndex(nextIndex);
    };

    const prevImg = () => {
        const prevIndex = (currentIndex - 1 + data.length) % data.length;
        setTempImgSrc(data[prevIndex].imgSrc);
        setCurrentIndex(prevIndex);
    };

    const closeModel = (e) => {
        if (e.target.classList.contains('model')) {
            setModel(false);
        }
    };

    return (
        <>
            <Header />
            <h1 style={{ textAlign: 'center', fontFamily: 'initial', padding: 20, color: '#5b3c14' }}>
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />Gallery
                <Divider sx={{ border: '1px solid lightgray', width: '100%', m: '20px 0px' }} />
            </h1>
            <div className={model ? "model open" : "model"} onClick={closeModel}>
                <ArrowBackIosIcon onClick={prevImg} className="nav-icon left" />
                <img src={tempImgSrc} alt="Expanded view" />
                <ArrowForwardIosIcon onClick={nextImg} className="nav-icon right" />
                <CloseIcon onClick={() => setModel(false)} className="close-icon" />
            </div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc, index)}>
                        <img src={item.imgSrc} alt={`Gallery item ${item.id}`} />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Gallery;
