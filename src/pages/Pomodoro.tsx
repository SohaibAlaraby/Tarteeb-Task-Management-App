import {useState,useRef,useEffect} from 'react';

import { TimerCircularProgress } from '../components/TimerCircularProgress.tsx'
import { useOutletContext } from 'react-router-dom';
import { type userTasksIntf } from "../data/initialTasks"

interface OutletContextType {
  userTasks: userTasksIntf[],
  addTask:Function,
  deleteTask: Function
}
type pomodoroType = {
    startTime:number,
    runningTime:number
}
export function Pomodoro(){

    const [visiblePomodoroTime, setVisiblePomodoroTime] = useState<pomodoroType>({
        startTime:1500, //25 min,
        runningTime:1500, //initially both equal
    });
    const [isRunning, setIsRunning] = useState(false);

    const timerRef = useRef<number | null>(null);

    // [دالة مضافة] دالة تشغيل أو إيقاف المؤقت (Start / Pause)
    const startTimer = () => {
        if (isRunning) {
            // لو شغال وعملنا كلِك، نقوم بإيقافه مؤقتاً
            if (timerRef.current) clearInterval(timerRef.current);
            setIsRunning(false);
        } else {
            // لو واقف وعملنا كلِك، نتأكد أن الوقت أكبر من صفر ونبدأ الـ Interval
            if (visiblePomodoroTime.runningTime <= 0) return;
            
            setIsRunning(true);
            
            timerRef.current = setInterval(() => {
                setVisiblePomodoroTime((prev) => {
                    // إذا وصل المؤقت لصفر، نقوم بإيقافه تماماً
                    if (prev.runningTime <= 1) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        setIsRunning(false);
                        return { ...prev, runningTime: 0 };
                    }
                    // طرح ثانية واحدة كل 1000 ملي ثانية
                    return { ...prev, runningTime: prev.runningTime - 1 };
                });
            }, 1000);
        }
    };
    // [دالة مضافة] دالة إعادة تعيين المؤقت للوقت الأصلي (Reset)
    const resetTimer = () => {
        // إيقاف الـ interval فوراً لو كان شغال
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRunning(false);
        
        // إعادة الوقت المتبقي (runningTime) ليساوي الوقت الأصلي المبدئي (startTime)
        setVisiblePomodoroTime((prev) => ({
            ...prev,
            runningTime: prev.startTime
        }));
    };
    // [تنظيف تلقائي] تنظيف الـ interval لحماية الذاكرة إذا خرج المستخدم من الصفحة فجأة
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    function onPomodoroTimeChange(totalSeconds:number) {
        if(totalSeconds < 0) return; 
        // إذا قام المستخدم بتعديل الوقت يدوياً، نوقف التايمر الحالي أولاً
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRunning(false);
        console.log({
            hours: String(Math.floor(totalSeconds / 3600)).padStart(2, '0'),
            minutes: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0'),
            seconds: String(totalSeconds % 60).padStart(2, '0'),
        });
        setVisiblePomodoroTime({
            startTime: totalSeconds,
            runningTime: totalSeconds
        });
    }
    
    

    return (
        <div id='pomodoro' className='flex flex-col items-center justify-center gap-6 bg-white overflow-y-auto  w-11/12 max-w-[950px] h-full p-[28px] border border-gray-300 shadow-lg max-md:p-[12px] max-md:w-[95%] '>
            
        <TimerCircularProgress 
        remainingSeconds={visiblePomodoroTime.runningTime}
        totalSeconds={visiblePomodoroTime.startTime}
        colorClass="stroke-light-Orange"
        onTimeChange={onPomodoroTimeChange}
        onStartTimer={startTimer}
        onResetTimer={resetTimer}
        isRunning={isRunning}
        />    
        </div>
    );
}