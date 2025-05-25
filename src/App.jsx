import DashboardMainContent from './components/Dashbord/DashboardMainContent';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import CalendarView from './components/CalendarView'; // Create this component

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-[#f5f9ff]">
        <Sidebar />
      </div>

      {/* Main Section */}
      <div className="w-[80%] flex flex-col">
        {/* Header */}
        <Header />

        {/* Content Area (below header) */}
        <div className="flex flex-1 p-4 gap-4">
          {/* Dashboard Main Content */}
          <div className="w-[60%]">
            <DashboardMainContent />
          </div>

          {/* Calendar View */}
          {/* <div className="w-[40%]">
            <CalendarView />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
