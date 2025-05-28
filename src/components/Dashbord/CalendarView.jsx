import { ArrowLeft, ArrowRight, Dot } from "lucide-react";
import AppoinmentCard from "./AppoinmentCard";
import AppointmentCard from "./AppoinmentCard";
import UpcomingSchedule from "./UpcomingSchedule";

const CalendarView = () => {
    const days = [
      { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"], activeSlot: [] },
      { day: "Tues", date: 26, times: ["08:00", "9:00", "10:00"], activeSlot: ["9:00"] }, 
      { day: "Wed", date: 27, times: ["12:00", "", "13:00"] , activeSlot: []},
      { day: "Thurs", date: 28, times: ["10:00","11:00", ""] , activeSlot: ["11:00"]},
      { day: "Fri", date: 29, times: ["","14:00", "16:00"] , activeSlot: []},
      { day: "Sat", date: 30, times: ["12:00","14:00", "15:00"] , activeSlot: ["12:00"] },
      { day: "Sun", date: 31, times: ["9:00","10:00", "11:00"] , activeSlot: ["9:00"]},
    ];

  
    return (
      <div className="bg-[#f5f9ff] pt-8 px-5 2xl:px-9 w-full">
        <div className="flex justify-between items-center">
        <h2 className="text-[#1f2b6c] font-semibold text-lg mb-3 2xl:mb-6">October 2021</h2>
        <div className="flex gap-2 py-3">
            <ArrowLeft size={14} color="#1f2b6c"/>
            <ArrowRight size={14} color="#1f2b6c"/>
        </div>
        </div>
        <div className="grid grid-cols-7 gap-4 ">
          {days.map((d, i) => {
            const isActive = d.date === 26; 
            return (
              <div
                key={i}
                className={`flex flex-col items-center p-1 rounded-lg ${
                  isActive ? "bg-[#e8efff]" : ""
                }`}
              >
                <p className="text-xs text-[#1f2b6c]">{d.day}</p>
                <div
                  className={`rounded-full px-2 py-1 text-[#1f2b6c] mt-1 mb-2 font-bold 2xl:text-xl`}
                >
                  {d.date}
                </div>
                {d.times.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`w-full text-center text-[10px] 2xl:text-[12px] flex justify-center items-center flex-col rounded-lg h-6 mb-2  ${
                      d.activeSlot.includes(slot)
                        ? (isActive ?"bg-[#1f2b6c] text-white" : "bg-[#ADAFDA] text-white")
                        : "text-[#1f2b6c] px-1"
                    }`}
                  >
                    {(slot === "")? "__": slot} 
                   {!isActive && <p className="size-[3px] bg-white rounded-full"></p>}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        <div className="flex gap-4 mt-4 ">
      <AppointmentCard
        title="Dentist"
        time="09:00 - 11:00"
        doctor="Dr. Cameron Williamson"
        icon="🦷"
        color="#1f2b6c" // Dark blue background
        width= "40%"
        textColor = "#ffffff"

      />
      <AppointmentCard
        title="Physiotherapy Appointment"
        time="11:00 - 12:00"
        doctor="Dr. Kevin Djones"
        icon="💪"
        color="#DDE2F9" // Light blue background
        width= "60%"
        textColor = "#1f2b6c"
      />

    </div>
    <UpcomingSchedule/>

      </div>
    );
  };
  
  export default CalendarView;
  