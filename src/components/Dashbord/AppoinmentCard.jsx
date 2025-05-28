import React from "react";

const AppointmentCard = ({ title, time, doctor, icon, color, width,textColor  }) => {
  return (
    <div
      className={`rounded-2xl  p-3 2xl:p-5 text-white  w-fit `}
      style={{ backgroundColor: color , color: textColor }}
    >
      <div className="flex justify-between items-center gap-8 mb-1">
        <p className="font-semibold text-sm 2xl:text-[1rem]">{title}</p>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-sm ">{time}</p>
     {doctor && <p className="text-xs">{doctor}</p>}
    </div>
  );
};

export default AppointmentCard;
