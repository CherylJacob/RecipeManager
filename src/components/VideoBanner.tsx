import videoSrc from '../assets/Video.mp4';
import './VideoBanner.css';

const VideoBanner = () => {
  return (
    <div className="video-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;