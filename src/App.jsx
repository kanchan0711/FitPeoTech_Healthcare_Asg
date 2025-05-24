
import DashboardMainContent from './components/DashboardMainContent'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
     <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
    </>
  )
}

export default App
