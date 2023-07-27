import React, { useState } from 'react';

function Video() {
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/dsXBgROjSqc'); // Eng video
  const [buttonText, setButtonText] = useState('Fr');

  const handleClick = () => {
    if (buttonText === 'Fr') {
      setVideoUrl('https://www.youtube.com/embed/cOIJGGgaSIY'); // replace NEW_VIDEO_URL with the actual URL of the French video
      setButtonText('Eng');
    } else {
      setVideoUrl('https://www.youtube.com/embed/dsXBgROjSqc'); // Eng video
      setButtonText('Fr');
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '560px', margin: '0 auto' }}>
      <iframe 
        width="560" 
        height="315" 
        src={videoUrl}
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Video;
