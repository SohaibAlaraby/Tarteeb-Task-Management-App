import {useState,useEffect} from 'react';
import { FaPlay } from "react-icons/fa6";
import { FaStop } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
interface ProgressProps {
  remainingSeconds:number;
  totalSeconds:number;
  colorClass: string;
  onTimeChange?:(totalSeconds:number)=>void;
  onStartTimer?:()=>void;
  onResetTimer:()=>void;
  isRunning:boolean;
}

export function TimerCircularProgress({ remainingSeconds,totalSeconds,onTimeChange ,onStartTimer, onResetTimer,isRunning,colorClass }: ProgressProps) {
  // هنثبت أبعاد افتراضية داخل الـ viewBox علشان الحسابات
  const percentage= totalSeconds > 0? remainingSeconds / totalSeconds * 100 : 0;
  const [isTyping, setIsTyping] = useState(false);
  const [displayedTime,setDisplayedTime] = useState({
    hours: String(Math.floor(remainingSeconds / 3600)).padStart(2, '0'),
    minutes: String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0'),
    seconds: String(remainingSeconds % 60).padStart(2, '0'),
  })
  
  useEffect(() => {
    if(!isTyping){
      setDisplayedTime({
        hours: String(Math.floor(remainingSeconds / 3600)).padStart(2, '0'),
        minutes: String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0'),
        seconds: String(remainingSeconds % 60).padStart(2, '0'),
      });
    }
  }, [remainingSeconds, isTyping]); // تم إضافة isTyping لمصفوفة التبعيات

  const updateTime = (newHours: string, newMinutes: string, newSeconds: string) => {
    // تحويل النصوص إلى أرقام عند الحساب النهائي فقط لإرسالها للأب
    const h = Number(newHours) || 0;
    const m = Number(newMinutes) || 0;
    const s = Number(newSeconds) || 0;
    const total = (h * 3600) + (m * 60) + s;
    if (onTimeChange) {
      onTimeChange(total);
    }
  };

  const handleInputBlur = () => {
    // عند خروج المستخدم من الحقل، بنقفل التنسيق بإضافة الأصفار بـ padStart
    setIsTyping(false); // إيقاف وضع الكتابة للسماح للـ useEffect بالعمل مجدداً
    const formattedHours = String(Number(displayedTime.hours) || 0).padStart(2, '0');
    const formattedMinutes = String(Math.min(Number(displayedTime.minutes) || 0, 59)).padStart(2, '0');
    const formattedSeconds = String(Math.min(Number(displayedTime.seconds) || 0, 59)).padStart(2, '0');

    setDisplayedTime({
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    });

    updateTime(formattedHours, formattedMinutes, formattedSeconds);
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTyping(true); // تفعيل وضع الكتابة لحماية المدخلات من التحديث الخارجي
    e.target.select();
  };
  
  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, ''); // أرقام فقط
    if (Number(val) > 99) val='99'; // حماية كحد أقصى للساعات

    setDisplayedTime(prevTime => {
      const updated = { ...prevTime, hours: val };
      return updated;
    });
    updateTime(val, displayedTime.minutes, displayedTime.seconds);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (Number(val) > 59) val='59'; // حماية للدقائق

    setDisplayedTime(prevTime => {
      const updated = { ...prevTime, minutes: val };
      return updated;
    });
    updateTime(displayedTime.hours, val, displayedTime.seconds);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^0-9]/g, '');
    if (Number(val) > 59) val='59'; // حماية للثواني

    setDisplayedTime(prevTime => {
      const updated = { ...prevTime, seconds: val };
      return updated;
    });
    updateTime(displayedTime.hours, displayedTime.minutes, val);
  };
  const handleTimerStart = ()=>{
    if(onStartTimer){
      onStartTimer();
    }
  }

  const handleTimerReset = ()=>{
    if(onResetTimer){
      onResetTimer();
    }
  }
  const inputStyle = "w-14 bg-transparent text-center font-bold text-gray-800 font-mono text-4xl max-md:text-3xl focus:outline-none select-all";
  const size = 600; 
  const strokeWidth = 10;
  const center = size / 2; // 200
  const radius = center - strokeWidth; // 190 (علشان الدائرة متبقاش مقصوصة من الحواف)
  
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    // جعلنا العرض الكامل مرن w-full ومعتمد على حجم الأب، وبحد أقصى max-w-sm علشان ميكبرش بزيادة
    <div className="flex flex-col items-center gap-8 w-full max-w-[384px] mx-auto">
      
      {/* الـ Container بقى مرن aspect-square بيضمن إنه يفضل مربع دايماً */}
      <div className="relative w-full aspect-square flex items-center justify-center">
        
        {/* استخدمنا viewBox وخلينا الـ w-full h-full علشان الـ SVG يملأ المكان ويتمدد بسلاسة */}
        <svg 
          viewBox={`0 0 ${size} ${size}`} 
          className="w-full h-full transform -rotate-90"
        >
          {/* الدائرة الخلفية */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            className="stroke-gray-200 fill-none"
            strokeWidth={strokeWidth}
          />

          {/* دائرة الـ Progress النشطة */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            className={`${colorClass} fill-none transition-all duration-500 ease-out`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* النص في السنتر مستخدمين حجم خط يتجاوب مع حجم الشاشة بصورة بسيطة */}
        {/* 👇 [تعديل] تجميع الـ 3 حقول في المنتصف مرتبة أفقياً (ساعات : دقائق : ثواني) */}
        <div className="absolute flex items-center justify-center text-gray-800 text-5xl max-md:text-3xl font-bold font-mono">
          
          {/* حقل الساعات */}
          <input
            type="text"
            maxLength={2}
            value={displayedTime.hours}
            onChange={handleHoursChange}
            onFocus={handleInputFocus} // تفعيل الـ Select الكامل عند الضغط
            onBlur={handleInputBlur}
            className={inputStyle}
            title="Hours"
            disabled={isRunning}
          />
          
          <span className="mb-1 animate-pulse">:</span> {/* نقطتين فاصلة مع تأثير نبض خفيف */}

          {/* حقل الدقائق */}
          <input
            type="text"
            maxLength={2}
            value={displayedTime.minutes}
            onChange={handleMinutesChange}
            onFocus={handleInputFocus} // تفعيل الـ Select الكامل عند الضغط
            onBlur={handleInputBlur}
            className={inputStyle}
            title="Minutes"
            disabled={isRunning}
          />
          
          <span className="mb-1 animate-pulse">:</span>

          {/* حقل الثواني */}
          <input
            type="text"
            maxLength={2}
            value={displayedTime.seconds}
            onChange={handleSecondsChange}
            onFocus={handleInputFocus} // تفعيل الـ Select الكامل عند الضغط
            onBlur={handleInputBlur}
            className={inputStyle}
            title="Seconds"
            disabled={isRunning}
          />
          
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button
        className='bg-light-Orange text-3xl text-white p-4 rounded-[100%] scale-90 cursor-pointer'
        onClick={handleTimerStart}
        >{isRunning?<FaPause/>:<FaPlay/>}</button>
        <button
        className='bg-gray-400 text-xl text-white p-3 rounded-[100%] focus:scale-90 cursor-pointer'
        onClick={handleTimerReset}
        ><FaStop/></button>
        
      </div>
    </div>
  );
}