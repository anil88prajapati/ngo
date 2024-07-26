import React, { useEffect, useState } from 'react';
import s3 from './../../aws/s3Service';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await s3.listObjectsV2({
          Bucket: 'sevasrijanhomevideos'
        }).promise();

        setVideos(response.Contents);
      } catch (error) {
        console.error('Error fetching videos from S3:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h2>List of Videos</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <a href={`https://sevasrijanhomevideos.s3.ap-south-1.amazonaws.com/${video.Key}`}>
              {video.Key}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
