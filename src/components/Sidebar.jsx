import { MessageSquareDiff,FileChartLine, Calendar, Settings, MessageCircle, Phone, LayoutDashboard, ArrowDownUp, MessageSquareDiffIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-[#f5f9ff]  py-12 flex flex-col items-center">
      {/* Logo */}
      <div className="text-2xl 2xl:text-[25px] font-semibold  mb-10">
        <span className="text-cyan-400">Health</span>
        <span className="text-[#1f2b6c]">care.</span>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8">
        {/* GENERAL */}
        <div>
          <p className="text-gray-400 text-sm mb-3">General</p>
          <ul className="flex flex-col gap-2 text-xs 2xl:text-sm">
            <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />
            <SidebarItem icon={<ArrowDownUp size={18} />} text="History" />
            <SidebarItem icon={<Calendar size={18} />} text="Calendar" />
            <SidebarItem icon={<MessageSquareDiffIcon size={18} />} text="Appointments" />
            <SidebarItem icon={<FileChartLine size={18} />} text="Statistics" />
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <p className="text-gray-400 text-xs 2xl:text-sm mb-3">Tools</p>
          <ul className="flex flex-col gap-3 text-xs 2xl:text-sm">
            <SidebarItem icon={<MessageCircle size={18} />} text="Chat" />
            <SidebarItem icon={<Phone size={18} />} text="Support" />
          </ul>
        </div>

        <div className="text-gray-400 text-sm mb-3 ">
        <SidebarItem icon={<Settings size={18} />} text="Setting" />
        </div>

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active }) => {
  return (
    <li
      className={`flex items-center gap-3   py-2 rounded-lg cursor-pointer transition-colors ${
        active
          ? 'text-[#1f2b6c] font-semibold'
          : 'text-gray-500  hover:text-[#1f2b6c] hover:font-semibold'
      }`}
    >
      {icon}
      <span>{text}</span>
    </li>
  );
};

export default Sidebar;
