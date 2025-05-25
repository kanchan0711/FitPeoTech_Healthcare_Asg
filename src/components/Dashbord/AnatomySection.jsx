import {
  ChevronDown,
  SearchX,
  Footprints,
  Heart,
  Fullscreen,
} from "lucide-react";
import anatomyImage from "../../assets/HumanAnatomy.png";

const AnatomySection = () => {
  return (
    <div className="">
      {/* Dashboard heading */}
      

      {/* Anatomy container */}
      <div className=" bg-[#f5f9ff] rounded-xl h-[390px] w-[250px] flex justify-center items-center relative">
        <div className="absolute top-3 right-3 ">
          <SearchX size={18} color="#989aa7" />
        </div>
        {/* Labels */}
        <div className="absolute top-[90px] right-[-30px] flex z-50">
          <Fullscreen size={35} color="#1f2b6c" />
          <div className=" bg-[#3a3aeb] text-white text-[0.7rem] rounded-lg px-3 h-[1.8rem] font-semibold flex items-center gap-1 shadow-lg ">
            <Heart size={14} color="#f00000" />
            Healthy Heart
          </div>
        </div>
        <div className="absolute bottom-[100px] left-[-7px] flex z-50">
          <div className=" bg-[#00e4f4] text-[#1f2b6c] text-[0.7rem]  rounded-lg px-3 h-[1.8rem] font-semibold flex items-center gap-1 shadow-lg ">
            <Footprints size={14} />
            Healthy Leg
          </div>
          <Fullscreen size={35} color="#1f2b6c" />
        </div>

        {/* Human anatomy image */}
        <img
          src={anatomyImage}
          alt="Human Anatomy"
          className="h-[350px] object-contain z-0"
        />
      </div>
    </div>
  );
};

export default AnatomySection;
