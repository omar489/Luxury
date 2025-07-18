import VideoSlider from './VideoSlider';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

interface ReelsVideoSliderProps {
  videos?: Video[];
  title?: string;
  description?: string;
  className?: string;
}

const defaultVideos: Video[] = [
  {
    id: "cTSA48bwubE",
    title: "العلمين",
    thumbnail: "https://img.youtube.com/vi/cTSA48bwubE/hqdefault.jpg"
  },
  {
    id: "hE-97QNTJ1o",
    title: "العلمين",
    thumbnail: "https://img.youtube.com/vi/hE-97QNTJ1o/hqdefault.jpg"
  },
  {
    id: "cNbn1uVTs6A",
    title: "العلمين",
    thumbnail: "https://img.youtube.com/vi/cNbn1uVTs6A/hqdefault.jpg"
  },
  {
    id: "kvPkAsiJOvI",
    title: "العلمين",
    thumbnail: "https://img.youtube.com/vi/kvPkAsiJOvI/hqdefault.jpg"
  },
  {
    id: "WuFCau56c58",
    title: "العلمين",
    thumbnail: "https://img.youtube.com/vi/WuFCau56c58/hqdefault.jpg"
  }
];

export const ReelsVideoSlider = ({ 
  videos = defaultVideos, 
  title = "فيديوهات تجارب العملاء", 
  description = "فيديوهات حقيقية من رحلات عملائنا إلى الساحل الشمالي",
  className = ""
}: ReelsVideoSliderProps) => {
  return (
    <section className={`py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 ${className}`} dir="rtl">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-base text-gray-700">
            {description}
          </p>
        </div>

        <VideoSlider videos={videos} />
      </div>
    </section>
  );
};

export default ReelsVideoSlider; 