import React from "react";

const ActivityFeed = () => {
  const days = [
    { day: "Mon", bars: [40, 60, 30] },
    { day: "Tues", bars: [70, 50, 20] },
    { day: "Wed", bars: [55, 20, 40] },
    { day: "Thurs", bars: [30, 60, 50] },
    { day: "Fri", bars: [70, 45, 35] },
    { day: "Sat", bars: [50, 20, 60] },
    { day: "Sun", bars: [55, 40, 30] },
  ];

  const barData = [
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 3},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 6},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 9},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 12},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 15},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 18},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 21},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 24},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 27},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 30},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 33},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 39},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 42},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 45},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 48},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 51},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 54},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 57},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 60},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 63},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 66},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 69},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 72},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 75},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 78},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 81},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 84},
    { height: "h-[30%]", color: "bg-[#25D2E1]" , bottom: 10, left: 87},
    { height: "h-[100%]", color: "bg-gray-300" , bottom: 0 , left: 90},
    { height: "h-[50%]", color: "bg-gray-300" , bottom: 30 , left: 93},
    { height: "h-[40%]", color: "bg-[#1f2b6c]" , bottom: 20, left: 96},
    
  ];


  return (
    <div className=" rounded-xl bg-[#f6f9fe] shadow-sm p-4 max-w-3xl mx-10">
      <div className="flex justify-between mb-2">
        <h2 className="text-md font-semibold text-[#1f2b6c]">Activity</h2>
        <p className="text-xs text-gray-500">3 appointment on this week</p>
      </div>
     

    <div className=" gap-3 h-24 relative mb-2">
      {barData.map((bar, index) => (
      <div
      key={index}
      className={`absolute w-1 rounded-sm ${bar.height} ${bar.color}`}
      style={{ bottom: `${bar.bottom}%`, left: `${bar.left}%` }}
    ></div>
      ))}
    </div> 


      <div className="flex items-end justify-between  ">
       
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
          
            <span className="text-xs text-gray-500">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
