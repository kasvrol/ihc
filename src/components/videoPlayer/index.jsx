import React from 'react';

const VideoPlayer = ({ title, videoSrc }) => {
  return (
    <div style={{ maxWidth: '70rem', width: '100%' }}>
      <div style={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
        borderRadius: '0.5rem'
      }}>
        <iframe
          src={videoSrc}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '0'
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
