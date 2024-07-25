import React, { useRef, useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YouTube from 'react-youtube';
import './Videos.css';


const ActivityVideos = () => {
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
    const opts = {
        height: '315',
        width: '560',
        playerVars: {
          modestbranding: 1,
          rel: 0
        },
      };
    return (
        <Box sx={{ maxWidth: '93%', mx: 'auto', p: 2, height: '520px', boxShadow: '3px 3px 13px rgba(0,0,0,0.40), -3px -3px 13px rgba(0,0,0,0.40)' }}>
            <Slider ref={sliderRef} {...settings}> 
                <div className='slider'>
                    <YouTube loading='eager' videoId={"QqJYAIwEP6k"} opts={opts} />
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
                <div className='slider'>
                   <YouTube loading='eager' videoId={"c0kt34Rmccw"} opts={opts} />
                </div>
                {/* <div>
                    <video width="100%" height="500" controls>
                        <source src={testVideo} type='video/mp4' />
                    </video>
                </div> */}
                <div className='slider'>
                    <YouTube loading='eager' videoId={"yY0ntA7Dc7g"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"eRTBMCjv-JI"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"VrjPr1iTAgI"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"q7ytE3yK5YA"} opts={opts} />
                </div>
                <div className='slider'>
                        <YouTube loading='eager' videoId={"bHh98cGjIJs"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"bHq-W3pAGTw"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"fhGNuSZzeH4"} opts={opts} />
                </div>
                <div className='slider'>
                    <YouTube loading='eager' videoId={"tUIwxLUuywE"} opts={opts} />
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

export default ActivityVideos;
