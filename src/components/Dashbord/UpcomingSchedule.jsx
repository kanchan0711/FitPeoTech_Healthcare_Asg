import React from "react";
import AppointmentCard from "./AppoinmentCard";



// Parent Component
const UpcomingSchedule = () => {
  const schedule = [
    {
      day: "On Thursday",
      appointments: [
        {
           
          title: "Health checkup complete",
          time: "11:00 AM",
          icon: "💉",
          color: "#DDE2F9", 
          width: "60%"
          
        },
        {
          title: "Ophthalmologist",
          time: "14:00 PM",
          icon: "👁️",
          color: "#DDE2F9", 
          width: "40%"
        },
      ],
    },
    {
      day: "On Saturday",
      appointments: [
        {
          title: "Cardiologist",
          time: "12:00 AM",
          icon: "❤️",
          color: "#DDE2F9", 
          width: "40%"
        },
        {
          title: "Neurologist",
          time: "16:00 PM",
          icon: "🧑‍⚕️",
          color: "#DDE2F9", 
          width: "40%"
        },
      ],
    },
  ];

  return (
    <div className="py-6">
      <h2 className="text-lg font-semibold text-[#1f2b6c] mb-4">The Upcoming Schedule</h2>

      {schedule.map((dayItem, index) => (
        <div key={index} className="mb-6">
          <p className="text-sm text-[#6b7280] font-medium mb-2">{dayItem.day}</p>
          <div className="flex gap-4 ">
            {dayItem.appointments.map((appointment, idx) => (
              <AppointmentCard
                key={idx}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
                color = {appointment.color}
                width = {appointment.width}
                textColor="#1f2b6c"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
