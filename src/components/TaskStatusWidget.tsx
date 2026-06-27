import { IoStatsChart } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
interface ProgressProps {
  percentage: number;
  colorClass: string;
  label: string;
}


function CircularProgress({ percentage, colorClass, label }: ProgressProps) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // 251.2
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3 flex-1">
    
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">

          <circle
            cx="48"
            cy="48"
            r={radius}
            className="stroke-gray-200 fill-none"
            strokeWidth="10"
          />

          <circle
            cx="48"
            cy="48"
            r={radius}
            className={`${colorClass} fill-none transition-all duration-500 ease-out`}
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        <span className="absolute text-xl font-bold text-gray-800">{percentage}%</span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className=" flex items-center gap-2 text-sm font-semibold text-gray-700 whitespace-nowrap"><FaCircle className={`text-[8px] ${colorClass.replace('stroke-', 'text-')}`}/>{label}</span>
      </div>
    </div>
  );
}

export function TaskStatusWidget({ userTasks }: { userTasks: any[] }) {
  
  const total = userTasks.length || 1;
  
  const completedCount = userTasks.filter(t => t.status === 'Completed').length;
  const inProgressCount = userTasks.filter(t => t.status === 'In Progress').length;
  const notStartedCount = userTasks.filter(t => t.status === 'Not Started').length;

  const completedPercent = Math.round((completedCount / total) * 100);
  const inProgressPercent = Math.round((inProgressCount / total) * 100);
  const notStartedPercent = Math.round((notStartedCount / total) * 100);

  return (
    <section id="Task-Status" className="bg-white rounded-2xl shadow-lg p-5 w-full border border-gray-100">

      <header className="flex items-center gap-2 mb-6">
        <IoStatsChart className="text-xl text-gray-400" />
        <h2 className="flex items-center gap-1.5 text-WaterMelon-Red">Task Status</h2>
      </header>

      <div className="flex justify-between items-center flex-wrap w-full gap-4 max-sm:flex-col max-sm:gap-8">
        <CircularProgress percentage={completedPercent} colorClass="stroke-green-600" label="Completed" />
        <CircularProgress percentage={inProgressPercent} colorClass="stroke-blue-600" label="In Progress" />
        <CircularProgress percentage={notStartedPercent} colorClass="stroke-red-600" label="Not Started" />
      </div>
    </section>
  );
}