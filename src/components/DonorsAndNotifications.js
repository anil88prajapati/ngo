import React, { useRef, useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
import './Videos.css';


const DonorsAndNotifications = () => {
    const sliderRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;

        const handleVideoPlay = () => {
            setIsVideoPlaying(true);
            slider.slickPause(); 
        };

        const handleVideoPause = () => {
            setIsVideoPlaying(false);
            slider.slickPlay(); 
        };

        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.addEventListener('play', handleVideoPlay);
            video.addEventListener('pause', handleVideoPause);
        });

        return () => {
            
            videos.forEach(video => {
                video.removeEventListener('play', handleVideoPlay);
                video.removeEventListener('pause', handleVideoPause);
            });
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <Box sx={{ maxWidth: '93%', mx: 'auto', p: 2, height: '520px', boxShadow: '3px 3px 13px rgba(0,0,0,0.40), -3px -3px 13px rgba(0,0,0,0.40)' }}>
            <Slider ref={sliderRef} {...settings}> 
                <div>
                    <YouTube videoId={"QqJYAIwEP6k"} />
                </div>
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={video1} type='video/mp4' />
                    </video>
                </div> */}
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={video2} type='video/mp4' />
                    </video>
                </div> */}
                <div>
                   <YouTube width="100%" height="500" videoId={"c0kt34Rmccw"} />
                </div>
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={testVideo} type='video/mp4' />
                    </video>
                </div> */}
                <div>
                    <YouTube width="100%" height="500" videoId={"yY0ntA7Dc7g"} />
                </div>
                <div>
                    <YouTube width="100%" height="500" videoId={"eRTBMCjv-JI"} />
                </div>
                <div>
                    <YouTube width="100%" height="500" videoId={"VrjPr1iTAgI"} />
                </div>
                <div>
                    <YouTube width="100%" height="500" videoId={"q7ytE3yK5YA"} />
                </div>
                <div>
                        <YouTube width="100%" height="500" videoId={"bHh98cGjIJs"} />
                </div>
                <div>
                    <YouTube width="100%" height="500" videoId={"bHq-W3pAGTw"} />
                </div>
                <div>
                    <YouTube width="100%" height="500" videoId={"fhGNuSZzeH4"} />
                </div>
                <div>
                    <YouTube className='' width="100%" height="100%"  videoId={"tUIwxLUuywE"} />
                </div>
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={video14} type='video/mp4' />
                    </video>
                </div> */}
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={video15} type='video/mp4' />
                    </video>
                </div> */}
            </Slider>
        </Box>
    );
};

export default DonorsAndNotifications;
