import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface VideoSliderProps {
  videos: Video[];
  className?: string;
}

export const VideoSlider = ({ videos, className = "" }: VideoSliderProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});

  const handleVideoPlay = (videoId: string) => {
    // Stop all other videos
    Object.keys(iframeRefs.current).forEach(id => {
      if (id !== videoId && iframeRefs.current[id]) {
        iframeRefs.current[id]!.src = '';
      }
    });
    
    // Play the clicked video
    setActiveVideo(videoId);
    if (iframeRefs.current[videoId]) {
      iframeRefs.current[videoId]!.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`;
    }
  };

  const handleSlideChange = () => {
    // Stop all videos when slide changes
    Object.keys(iframeRefs.current).forEach(id => {
      if (iframeRefs.current[id]) {
        iframeRefs.current[id]!.src = '';
      }
    });
    setActiveVideo(null);
  };

  return (
    <div className={`relative ${className}`}>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative w-full bg-black overflow-hidden rounded-xl shadow-2xl" 
                 style={{ paddingTop: '177.77%' }}>
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Video Poster */}
                <div
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center cursor-pointer z-10 transition-opacity duration-500 ${
                    activeVideo === video.id ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                  onClick={() => handleVideoPlay(video.id)}
                >
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Video title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* YouTube iframe */}
                <iframe
                  ref={(el) => { iframeRefs.current[video.id] = el; }}
                  className="w-full h-full border-none relative z-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Navigation buttons */}
        <div className="swiper-button-next !text-white !right-2 !w-12 !h-12 !bg-black/70 !rounded-full !backdrop-blur-sm !border !border-white/20 hover:!bg-black/90 !transition-all !duration-200 after:!text-lg after:!font-bold hover:!scale-110 !z-10"></div>
        <div className="swiper-button-prev !text-white !left-2 !w-12 !h-12 !bg-black/70 !rounded-full !backdrop-blur-sm !border !border-white/20 hover:!bg-black/90 !transition-all !duration-200 after:!text-lg after:!font-bold hover:!scale-110 !z-10"></div>
      </Swiper>
    </div>
  );
};

export default VideoSlider; 