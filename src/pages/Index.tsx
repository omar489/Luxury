import { useState, useEffect } from "react";
import beachHero from "../assets/beach-hero.jpg";
import luxuryLogo from "../assets/luxury-holidays-logo.png";
import coverVideo from "../assets/Cover one shot.mp4";
import WhatsAppIcon from "../components/WhatsAppIcon";
import TikTokIcon from "../components/TikTokIcon";
import XIcon from "../components/XIcon";
import SnapchatIcon from "../components/SnapchatIcon";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Star, 
  Phone, 
  MapPin, 
  Plane, 
  Users, 
  Shield, 
  Clock, 
  Waves,
  Sun,
  Heart,
  CheckCircle,
  MessageCircle,
  Calendar,
  Gift,
  Crown,
  Sparkles,
  Camera,
  Car,
  Utensils,
  Bed,
  Wifi,
  Coffee,
  Quote,
  Baby,
  Building2,
  Instagram,
  Twitter,
  Play,
  Globe
} from "lucide-react";
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import luxImg from '../assets/LUX.png';
import luxPlusImg from '../assets/LUX PLUS.png';
import luxPremiumImg from '../assets/LUX PREMIUM.png';
import fiveDaysImg from '../assets/5days.png';
import ReelsVideoSlider from '../components/ReelsVideoSlider';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [giftBoxClicked, setGiftBoxClicked] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [totalSeatsLeft, setTotalSeatsLeft] = useState(127);
  const [trips, setTrips] = useState([
    { id: 1, date: "10 يوليو", type: "أيام الأسبوع", availableSeats: 0 },
    { id: 2, date: "13 يوليو", type: "عطلة نهاية أسبوع", availableSeats: 0 },
    { id: 3, date: "17 يوليو", type: "أيام الأسبوع", availableSeats: 0 },
    { id: 4, date: "20 يوليو", type: "عطلة نهاية أسبوع", availableSeats: 17 },
    { id: 5, date: "24 يوليو", type: "أيام الأسبوع", availableSeats: 20 },
    { id: 6, date: "27 يوليو", type: "عطلة نهاية أسبوع", availableSeats: 22 },
    { id: 7, date: "31 يوليو", type: "أيام الأسبوع", availableSeats: 25 },
    { id: 8, date: "3 أغسطس", type: "أيام الأسبوع", availableSeats: 26 },
    { id: 9, date: "6 أغسطس", type: "عطلة نهاية أسبوع", availableSeats: 28 },
    { id: 10, date: "10 أغسطس", type: "أيام الأسبوع", availableSeats: 30 },
    { id: 11, date: "13 أغسطس", type: "عطلة نهاية أسبوع", availableSeats: 30 },
    { id: 12, date: "17 أغسطس", type: "أيام الأسبوع", availableSeats: 33 },
    { id: 13, date: "20 أغسطس", type: "عطلة نهاية أسبوع", availableSeats: 22 },
    { id: 14, date: "24 أغسطس", type: "أيام الأسبوع", availableSeats: 40 },
    { id: 15, date: "27 أغسطس", type: "عطلة نهاية أسبوع", availableSeats: 44 },
    { id: 16, date: "31 أغسطس", type: "أيام الأسبوع", availableSeats: 48 }
  ]);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderImages = [img1, img2, img3, img4, img5, img6];
  const plusDivs = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= sliderImages.length) newIndex = 0;
    if (newIndex < 0) newIndex = sliderImages.length - 1;
    setSlideIndex(newIndex);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Next/Prev handlers
  const goToPrev = () => setSlideIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const goToNext = () => setSlideIndex((prev) => (prev + 1) % sliderImages.length);

  useEffect(() => {
    setIsVisible(true);
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Simulate seats reducing over time with more frequent updates
    const seatsInterval = setInterval(() => {
      setTrips(prevTrips => 
        prevTrips.map(trip => ({
          ...trip,
          availableSeats: Math.max(0, trip.availableSeats - Math.floor(Math.random() * 2))
        }))
      );
      
      setTotalSeatsLeft(prev => Math.max(0, prev - Math.floor(Math.random() * 3)));
    }, 15000); // Reduced to 15 seconds for more urgency

    return () => {
      clearInterval(countdownInterval);
      clearInterval(seatsInterval);
    };
  }, []);

  const whatsappNumber = "966920033603";
  const whatsappMessage = "مرحباً، أود الاستفسار عن باقات الساحل الشمالي الصيفية";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleGiftBoxClick = () => {
    setGiftBoxClicked(true);
    setShowDiscount(true);
    setTimeout(() => setShowDiscount(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white font-cairo arabic-text">
      {/* Fixed WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-2xl animate-bounce"
        size="sm"
      >
        <WhatsAppIcon className="w-5 h-5 ml-1" />
        <span className="text-sm font-bold">احجز الآن</span>
      </Button>

      {/* Hero Section with Beach Video Background */}
      <section className="relative min-h-screen flex flex-col overflow-hidden px-4">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ animation: 'beachWaves 4s ease-in-out infinite' }}
              onError={() => setVideoError(true)}
            >
              <source src={coverVideo} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${beachHero})` }}
            />
          )}
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        {/* Logo */}
        <div className="w-full flex justify-center mb-6 z-30 pt-6">
          <img 
            src={luxuryLogo} 
            alt="Luxury Holidays" 
            className="h-20 md:h-28 w-auto opacity-90 drop-shadow-lg"
          />
        </div>
        {/* Hero Content */}
        <div className={`relative z-20 text-center px-4 max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}> 
          {/* New Hero Content */}
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-medium text-white/90 mb-4 drop-shadow-lg">
              فرصتك لصيف على أصوله
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              احجز رحلتك الصيفية الآن
              <br />
              <span className="text-turquoise-300">إلى العلمين</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 leading-relaxed font-medium text-white/95 drop-shadow-lg">
              من جدة والرياض مباشرة إلى الساحل الشمالي
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/90 drop-shadow-lg font-medium">
              رحلتك معنا أصولها!
            </p>
            {/* Features */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <span className="font-extrabold text-turquoise-300 text-lg md:text-xl">انتقالات VIP</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <span className="font-extrabold text-turquoise-300 text-lg md:text-xl">فنادق راقية</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <span className="font-extrabold text-turquoise-300 text-lg md:text-xl">طيران مباشر</span>
              </div>
            </div>
          </div>
          {/* Primary CTA with WhatsApp Icon */}
          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-xl font-bold rounded-full shadow-2xl w-full max-w-sm animate-pulse border-2 border-green-400"
          >
            <WhatsAppIcon className="w-6 h-6 ml-3" />
            احجز رحلتك الآن
          </Button>
        </div>
      </section>

      {/* Radio Button Slider Section - Why North Coast */}
      <section className="py-16 px-4 bg-gradient-to-r from-turquoise-50 to-blue-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              ✨ ليش الساحل الشمالي في مصر؟
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              وجهة صيف 2025… اللي جمعت كل شي في مكان واحد.
              <br />
              بدون زحمة المدن… ولا مبالغة المنتجعات
            </p>
          </div>
          
          {/* Mobile Friendly Image Slider */}
          <div className="relative w-full max-w-xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className="mySlides w-full h-80 md:h-[28rem] object-contain"
                style={{ display: idx === slideIndex ? 'block' : 'none' }}
              />
            ))}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10"
              onClick={() => plusDivs(-1)}
              aria-label="Previous slide"
            >
              &#10094;
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10"
              onClick={() => plusDivs(1)}
              aria-label="Next slide"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              برنامجك السياحي على أصوله
            </h1>
            <div className="mb-6 flex justify-center">
              <img 
                src={fiveDaysImg} 
                alt="خمس أيام وأربع ليالي" 
                className="h-36 md:h-48 w-auto object-contain"
              />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              كل شي … من بيتك لجلستك عالبحر رتبناه على أصوله
            </p>
          </div>

          <div className="bg-gradient-to-r from-turquoise-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <div className="space-y-6 text-right">
              {[
                { 
                  icon: <Plane className="w-6 h-6" />, 
                  title: "طيران مباشر على فلاي ناس",
                  desc: "من مطار جدة أو الرياض… للعلمين مباشرة"
                },
                { 
                  icon: <Bed className="w-6 h-6" />, 
                  title: "فنادق عالمية",
                  desc: "إقامة 5 أيام في الفندق الي تختاره"
                },
                { 
                  icon: <Car className="w-6 h-6" />, 
                  title: "انتقالات VIP من وإلى المطار",
                  desc: "نكون في استقبالك من لحظة وصولك ونودعك"
                },
                { 
                  icon: <Utensils className="w-6 h-6" />, 
                  title: "🍽️ وجبات يومية",
                  desc: "فطور وغداء وعشاء حسب الفندق الي تختاره"
                },
                { 
                  icon: <Gift className="w-6 h-6" />, 
                  title: "🎁 عروض وهدايا",
                  desc: "خصم للحجز المبكر + مفاجآت المناسبات:"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="text-turquoise-200 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-white/90 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-900">احجز مكانك قبل الزحمة…</h3>
            <p className="text-gray-700 mb-6">واختر باقتك، تاريخك، وطريقتك.</p>
            <Badge className="bg-gold-500 text-gold-900 px-4 py-2 text-sm">
              🔒 الحجز المبكر = أفضل سعر + أعلى توافر
            </Badge>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-50 to-turquoise-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              اختر باقتك على ذوقك
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* LUX Package */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-turquoise-200">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img src={luxImg} alt="LUX" className="block mx-auto w-full max-w-xs object-contain" style={{margin: 0, padding: 0}} />
                </div>
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-red-500 animate-breathe" style={{animation: 'breathe 2.5s ease-in-out infinite'}}>السعر يبدأ من 3,300 ريال للفرد</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Lablaya Marina</h4>
                    <p className="text-xs text-gray-600 mb-1">📍 في قلب مارينا</p>
                    <p>إطلالة بحر تسر عينك، خصوصية تريحك، وفطار وغداء وعشاء يفتح النفس</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Safy Cabanas</h4>
                    <p className="text-xs text-gray-600 mb-1">🏝️ راحة وخصوصية بسعر ذكي</p>
                    <p>للي يفضّل السفرة على طريقته.، بدون مبالغة أو إضافات ما يحتاجها</p>
                  </div>
                </div>
                <Button onClick={openWhatsApp} className="w-full bg-turquoise-600 hover:bg-turquoise-700">
                  للحجز تواصل معنا
                </Button>
              </CardContent>
            </Card>

            {/* LUX PLUS Package */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gold-300 transform scale-105">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img src={luxPlusImg} alt="LUX PLUS" className="block mx-auto w-full max-w-xs object-contain" style={{margin: 0, padding: 0}} />
                </div>
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-red-500 animate-breathe" style={{animation: 'breathe 2.5s ease-in-out infinite'}}>السعر يبدأ من 3,790 ريال للفرد</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Gewan White Beach</h4>
                    <p className="font-bold text-gray-700 mb-1">راحة مطلّة على البحر</p>
                    <p>فلل وغرف على البحر، مع فطار وغداء وعشاء على أعلى مستوى</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Gewan Resort</h4>
                    <p className="text-xs text-gray-600 mb-1">🎉 كل المتعة في مكان واحد</p>
                    <p>أكوا بارك، شاطئ خاص، مع فطار وغداء وعشاء راقي</p>
                  </div>
                </div>
                <Button onClick={openWhatsApp} className="w-full bg-gold-600 hover:bg-gold-700">
                  للحجز تواصل معنا
                </Button>
              </CardContent>
            </Card>

            {/* LUX PREMIUM Package */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-purple-300">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img src={luxPremiumImg} alt="LUX PREMIUM" className="block mx-auto w-full max-w-xs object-contain" style={{margin: 0, padding: 0}} />
                </div>
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-red-500 animate-breathe" style={{animation: 'breathe 2.5s ease-in-out infinite'}}>السعر يبدأ من 5,990 ريال للفرد</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Gewan Palace Luxury</h4>
                    <p className="font-bold text-gray-700 mb-1">إقامة واسعة وخصوصية عالية</p>
                    <p>فخامة واسترخاء وخدمة تليق بذوقك مع فطار وغداء وعشاء يليق فيك</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Rixos Premium Alamein</h4>
                    <p className="text-xs text-gray-600 mb-1">👑 قمة الفخامة على طراز عالمي</p>
                    <p>أجنحة راقية، وشاطئ خاص مع فطار وغداء وعشاء يومي</p>
                  </div>
                  <div className="text-sm">
                    <h4 className="font-bold mb-1">Cleopatra Luxury Sidi Heneish</h4>
                    <p className="text-xs text-gray-600 mb-1">🛎️ هدوء وذوق رفيع</p>
                    <p>تصميم راقي، إطلالات تخطف الأنفاس، وفطار وغداء وعشاء يومي فاخر</p>
                  </div>
                </div>
                <Button onClick={openWhatsApp} className="w-full bg-purple-600 hover:bg-purple-700">
                  للحجز تواصل معنا
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Offers Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              عروض تضبط الرحلة على ذوقك
            </h2>
          </div>
          
          <Accordion type="multiple" className="space-y-4">
            {/* Early Booking */}
            <AccordionItem value="early-booking" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">تحجز أبكر؟ توفر أكثر</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />خصم 150 ريال للحجز قبل 30 أيام من السفر</p>
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />خصم 100 ريال للحجز قبل السفر ب 15 أيام</p>
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />خصم 50 ريال للحجز قبل السفر ب 7 أيام</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Children */}
            <AccordionItem value="children" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Baby className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">إقامة أطفالك؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />الأول مجانًا حتى 12 سنة</p>
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />الثاني مجانًا لو تحت 6 سنوات</p>
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />ولو أكبر؟ <span className="font-bold">رسوم رمزية</span></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Friends */}
            <AccordionItem value="friends" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">معك أصحابك؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />خصم خاص لو أنتم 4</p>
                  <p className="flex items-center text-sm"><CheckCircle className="w-4 h-4 text-green-500 ml-2" />نضمن لكم <span className="font-bold">غرف متجاورة</span></p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Family */}
            <AccordionItem value="family" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">معك العيلة؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><Building2 className="w-4 h-4 text-turquoise-500 ml-2" />غرف متصلة أو مزدوجة، حسب احتياجكم</p>
                  <p className="flex items-center text-sm"><MapPin className="w-4 h-4 text-turquoise-500 ml-2" />خصوصية أعلى مع وحدات مطلّة على البحر</p>
                  <p className="flex items-center text-sm"><Coffee className="w-4 h-4 text-turquoise-500 ml-2" />اختَر إطلالتك: بحر أو مسبح</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Special Occasions */}
            <AccordionItem value="occasions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">عندك مناسبة؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><Gift className="w-4 h-4 text-turquoise-500 ml-2" />شهر عسل، عيد ميلاد، احتفال خاص؟</p>
                  <p className="flex items-center text-sm"><Star className="w-4 h-4 text-turquoise-500 ml-2" />نرتبلك مفاجآت خاصة: استقبال بالورود، تزيين الغرفة</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Photography */}
            <AccordionItem value="photography" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">ودّك توثّق الرحلة؟</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><Camera className="w-4 h-4 text-turquoise-500 ml-2" />جلسة تصوير احترافية</p>
                  <p className="flex items-center text-sm"><Star className="w-4 h-4 text-turquoise-500 ml-2" />صور جاهزة للسوشيال ميديا</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* City Tours */}
            <AccordionItem value="tours" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">ودك تزور القاهرة أو الإسكندرية</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><Plane className="w-4 h-4 text-turquoise-500 ml-2" />استمتع بتاريخ وجمال أهم مدينتين في مصر</p>
                  <p className="flex items-center text-sm"><Car className="w-4 h-4 text-turquoise-500 ml-2" />جدول سياحي مرتب + سيارة خاصة</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* VIP Concierge */}
            <AccordionItem value="concierge" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-turquoise-600" />
                  <span className="text-lg font-bold text-gray-900">ودك خدمة كونسيرج VIP</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-2">
                  <p className="flex items-center text-sm"><Clock className="w-4 h-4 text-turquoise-500 ml-2" />نرتّب جدولك اليومي على راحتك</p>
                  <p className="flex items-center text-sm"><Coffee className="w-4 h-4 text-turquoise-500 ml-2" />نحجز لك المطاعم، الأنشطة، والجولات</p>
                  <p className="flex items-center text-sm"><Car className="w-4 h-4 text-turquoise-500 ml-2" />نوفر لك تنقّلات فخمة ومريحة</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-turquoise-500 to-blue-600 rounded-2xl p-6 text-white mt-8"> 
            <p className="mb-4">احجز الآن واستمتع بعروض الحجز المبكر</p>
            <Button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
            >
              <WhatsAppIcon className="w-5 h-5 ml-2" />
              احجز مقعدك الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Trips Table Section with Enhanced Seat Animations */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              📆 تواريخ الرحلات – "مقاعد محدودة… ودفعات تروح بسرعة"
            </h2>
            <p className="text-base text-gray-600 mb-4">اختر دفعتك بدري وخذ أفضل سعر + أعلى توافر للغرف</p>
            <Badge className="bg-red-500 text-white px-4 py-2 text-sm animate-pulse">
              🔔 كل يوم يمر، المقاعد تقل…
            </Badge>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-turquoise-50">
                  <TableHead className="text-right font-bold text-turquoise-800">الرحلة</TableHead>
                  <TableHead className="text-right font-bold text-turquoise-800">التاريخ</TableHead>
                  <TableHead className="text-right font-bold text-turquoise-800">نوع الرحلة</TableHead>
                  <TableHead className="text-right font-bold text-turquoise-800">المقاعد المتبقية</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trips.map((trip, index) => (
                  <TableRow 
                    key={trip.id} 
                    className="hover:bg-turquoise-50 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TableCell className="font-medium text-lg">{trip.id}</TableCell>
                    <TableCell className="font-semibold text-gray-900">{trip.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={trip.type === "عطلة نهاية أسبوع" ? "default" : "secondary"}
                        className="text-xs animate-scale-in"
                      >
                        {trip.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold text-xl transition-all duration-500 ${
                          trip.availableSeats <= 10 
                            ? 'text-red-600 animate-bounce' 
                            : trip.availableSeats <= 20 
                            ? 'text-orange-600 animate-pulse' 
                            : 'text-green-600'
                        }`}>
                          {trip.availableSeats}
                        </span>
                        {trip.availableSeats <= 15 && (
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                          </div>
                        )}
                        {trip.availableSeats <= 10 && (
                          <Badge variant="destructive" className="text-xs animate-pulse">
                            عدد محدود!
                          </Badge>
                        )}
                        {trip.availableSeats <= 5 && (
                          <Badge className="bg-red-700 text-white text-xs animate-bounce">
                            آخر فرصة!
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="text-center mt-6">
            <Button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-full animate-pulse"
            >
              <WhatsAppIcon className="w-5 h-5 ml-2" />
              احجز الآن لتأمين مقعدك
            </Button>
          </div>
        </div>
      </section>

      {/* Reels Video Slider */}
      <ReelsVideoSlider />


      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-gray-600 mb-4">Trusted by Top-Performing Partnership Teams</h2>
          </div>
          <div id="animated-text-strip">
            {[...Array(3)].map((_, i) => (
              <span className="marquee" key={i}>
                فلاي ناس &nbsp;•&nbsp; Rixos &nbsp;•&nbsp; Gewan &nbsp;•&nbsp; Cleopatra &nbsp;•&nbsp; Marina &nbsp;•&nbsp; Alamein &nbsp;•&nbsp; White Beach &nbsp;•&nbsp; Palace &nbsp;•&nbsp; Cabanas &nbsp;•&nbsp; Premium &nbsp;•&nbsp; Resort &nbsp;•&nbsp; Luxury &nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-turquoise-600 to-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            احجز مع Luxury Holidays… وخلنا نرتب لك صيف على أصوله
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90">
            الأماكن تمتلئ بسرعة كل صيف – احجز الآن لضمان مواعيدك المفضلة
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl animate-bounce"
            >
              <WhatsAppIcon className="w-6 h-6 ml-3" />
              احجز رحلتك للساحل الشمالي الآن
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-turquoise-700 px-8 py-4 text-lg font-bold rounded-full backdrop-blur-sm"
            >
              <Phone className="w-6 h-6 ml-3" />
              920033603
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs opacity-75">
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 ml-1" />
              حجز فوري
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 ml-1" />
              دفع آمن
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 ml-1" />
              إلغاء مرن
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-3 h-3 ml-1" />
              دعم 24/7
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              الأسئلة المتكررة
            </h2>
            <p className="text-base text-gray-600">أجوبة على أكثر الأسئلة شيوعاً حول رحلاتنا</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ كم مدة البرنامج؟ وهل التواريخ محددة؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <div className="mb-2">مدة البرنامج:</div>
                <ul className="list-disc pr-6 mb-2">
                  <li>5 أيام / 4 ليالي</li>
                  <li>6 أيام / 5 ليالي <span className="text-sm text-gray-500">(من جدة)</span></li>
                </ul>
                <div className="mb-2">
                  والرحلات متوفرة مرتين أسبوعيًا من يونيو إلى نهاية أغسطس 2025.
                </div>
                <div className="text-sm text-gray-500">(من الرياض وجدة إلى مطار العلمين مباشرة)</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ أقدر أختار الفندق أو نوع الغرفة؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p className="mb-2">نعم، تقدر تختار من 7 فنادق فخمة.</p>
                <p className="mb-2">وتقدر تختار الإطلالة الي تحبها، بحر، مسبح</p>
                <p>ونوع الغرفة، شاليه أو الفيلا</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ أقدر أضيف خدمات خاصة؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p className="mb-3">أكيد! وفرنا لك:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-turquoise-600" />
                    <span>مفاجآت (عيد ميلاد، شهر عسل،…)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-turquoise-600" />
                    <span>جلسات تصوير + درون</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-turquoise-600" />
                    <span>VIP Concierge مساعد</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ وش سياسة الأطفال؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-turquoise-600" />
                    <span>الطفل الأول حتى 11.99 سنة: إقامة مجانية (يُدفع فقط تذكرة الطيران)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-turquoise-600" />
                    <span>الطفل الثاني حتى 5.99 سنة: مجاناً أيضاً</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-turquoise-600" />
                    <span>من 6 إلى 11.99 سنة: رسوم رمزية في الليلة + تذكرة الطيران</span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ هل الوجهة آمنة؟ كيف الأجواء؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p className="mb-2">العلمين وجهة <strong>آمنة جداً</strong>، بخدمات راقية تناسب العوائل.</p>
                <p>والأجواء؟ صيفها <strong>منعش</strong> على البحر، وحرارة معتدلة مقارنة بمدن ثانية.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ أقدر أحجز الباقة في شهر 9؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p className="mb-2 font-semibold text-red-600">للأسف لا.</p>
                <p>الباقة متوفرة فقط حتى <strong>نهاية أغسطس 2025</strong>.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ كيف رح تكون تنقلاتي؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p>Level A+AB+B تقدر تضيف خدمة الانتقالات بالسيارة الي تختارها</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 py-4 text-right hover:no-underline">
                <span className="font-semibold text-gray-900">❓ هل الباقة تشمل جدول سياحي؟</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                <p className="mb-3 font-semibold">الباقة تشمل:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>طيران + إقامة + انتقالات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>وجبات حسب الفندق</span>
                  </li>
                </ul>
                <p className="mb-2">برسوم Concierge وتقدر تضيف خدمة ال</p>
                <p className="mb-3 font-semibold">مساعد شخصي ينسّق لك كل شي على ذوقك:</p>
                <ul className="space-y-1 mr-4">
                  <li>• الرحلات الداخلية</li>
                  <li>• حجوزات المطاعم</li>
                  <li>• تنظيم الأنشطة وأماكن الدخول</li>
                  <li>• الانتقالات</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-6 text-turquoise-400">عن الشركة</h3>
            
            <div className="space-y-4 text-gray-300 text-sm max-w-2xl mx-auto">
              <div className="flex items-start justify-center gap-2">
                <span>📝</span>
                <div>
                  <p className="font-semibold">رقم تسجيل وزارة السياحة السعودية:</p>
                  <p>73105481</p>
                </div>
              </div>
              
              <div className="flex items-start justify-center gap-2">
                <span>📍</span>
                <div>
                  <p className="font-semibold">مكتب الرياض:</p>
                  <p>7596 طريق أبي بكر الصديق الرئيسي – حي المرسلات</p>
                  <p>بجوار مطعم ذوق المذاق التركي</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-turquoise-400" />
                <p className="font-semibold">تواصل معانا 920033603</p>
              </div>
              
              <div className="flex items-center justify-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-green-400" />
                <p className="font-semibold">واتساب متاح 24/7</p>
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://maps.app.goo.gl/B3p1wypdgLVV7v8X8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <MapPin className="w-5 h-5 text-red-400" />
            </a>
            <a 
              href="https://www.instagram.com/luxuryholidaysksa?igsh=eno0OWt6MmJ0a2Zj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
            </a>
            <a 
              href="https://www.tiktok.com/@luxholidaysksa?_t=ZS-8xrZKflfd1m&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <TikTokIcon size={44} />
            </a>
            <a 
              href="https://www.snapchat.com/add/luxholidaysksa?share_id=paF89OPclgo&locale=en-GB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <SnapchatIcon size={44} />
            </a>
            <a 
              href="https://luxuryholidays-sa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors hover:scale-110"
            >
              <XIcon className="w-5 h-5 text-white" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
            <p>&copy; 2025 Luxury Holidays. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
