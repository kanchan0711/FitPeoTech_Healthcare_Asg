import CalendarView from './components/Dashbord/CalendarView';
import DashboardMainContent from './components/Dashbord/DashboardMainContent';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import CalendarView from './components/CalendarView'; // Create this component

function App() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-[16%] bg-[#f5f9ff]">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="w-[84%] flex flex-col">
        {/* Header */}
        <Header />

        {/* Content Area (below header) */}
        <div className="flex flex-1 gap-4">
          {/* Dashboard Main Content */}
          <div className="w-[55%]">
            <DashboardMainContent />
          </div>

          {/* Calendar View */}
          <div className="w-[49%]">
             <CalendarView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
