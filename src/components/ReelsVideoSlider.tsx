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
    id: "8p3Sb_q4flY",
    title: "رحلة أحمد وعائلته",
    thumbnail: "https://img.youtube.com/vi/8p3Sb_q4flY/hqdefault.jpg"
  },
  {
    id: "vClgn_eJy_8", 
    title: "شهر العسل في العلمين",
    thumbnail: "https://img.youtube.com/vi/vClgn_eJy_8/hqdefault.jpg"
  },
  {
    id: "JLkOSpejbaQ",
    title: "مغامرات الشباب",
    thumbnail: "https://img.youtube.com/vi/JLkOSpejbaQ/hqdefault.jpg"
  },
  {
    id: "ZbZSe6N_BXs",
    title: "رحلة العائلة الكبيرة",
    thumbnail: "https://img.youtube.com/vi/ZbZSe6N_BXs/hqdefault.jpg"
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "أنشطة الماء والرياضة",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg"
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