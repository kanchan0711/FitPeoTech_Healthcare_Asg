import { MoveRight } from "lucide-react";

const HealthStatusCards = () => {
    const cards = [
      {
        icon: "🫁",
        title: "Lungs",
        date: "26 Okt 2021",
        color: "bg-[#B34B4B]",
        width: "65%",
      },
      {
        icon: "🦷",
        title: "Teeth",
        date: "26 Okt 2021",
        color: "bg-[#7AD4C2]",
        width: "80%",
      },
      {
        icon: "🦴",
        title: "Bone",
        date: "26 Okt 2021",
        color: "bg-[#FD7E5F]",
        width: "70%",
      },
    ];
  
    return (
      <div className="flex flex-col justify-between">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f5f9ff] w-[160px] rounded-xl p-4 shadow-sm"
          >
            {/* Icon and title */}
            <div className="flex items-center gap-2 my-2">
              <span className="text-2xl">{card.icon}</span>
              <p className="text-[#1f2b6c] font-semibold text-sm">
                {card.title}
              </p>
            </div>
  
            {/* Date */}
            <p className="text-gray-400 text-xs mb-2">Date: {card.date}</p>
  
            {/* Health status bar */}
            <div className="relative h-1.5 bg-gray-200 rounded-full">
              <div
                className={`absolute top-0 left-0 h-1.5 ${card.color} rounded-full`}
                style={{ width: card.width }}
              />
            </div>
          </div>
        ))}

        <span className="text-gray-400 flex text-[0.7rem] justify-end items-center gap-2">
            Details 
            <MoveRight size={10}/>
        </span>
      </div>
    );
  };
  
  export default HealthStatusCards;
  