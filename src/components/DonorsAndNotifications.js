import React, { useRef, useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testVideo from '../assets/videos/testVideo.mp4';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';
import video9 from '../assets/videos/video9.mp4';
import video10 from '../assets/videos/video10.mp4';
import video11 from '../assets/videos/video11.mp4';
import video12 from '../assets/videos/video12.mp4';
import video13 from '../assets/videos/video13.mp4';
import video14 from '../assets/videos/video14.mp4';
import video15 from '../assets/videos/video15.mp4';

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
                    <video width="100%" height="500" controls>
                        <source src={video4} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video1} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video2} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video3} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={testVideo} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video6} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video7} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video8} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video9} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video10} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video11} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video12} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video13} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video14} type='video/mp4' />
                    </video>
                </div>
                <div>
                    <video width="100%" height="500" controls>
                        <source src={video15} type='video/mp4' />
                    </video>
                </div>
            </Slider>
        </Box>
    );
};

export default DonorsAndNotifications;
