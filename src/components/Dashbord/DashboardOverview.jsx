import React from 'react'
import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import { ChevronDown } from 'lucide-react'
import ActivityFeed from './ActivityFeed'

const DashboardOverview = () => {
  return (
    <div className='pt-8 '>
        <div className="flex justify-between mx-5">
        <span className="text-[#1f2b6c] font-semibold text-[1.65rem]">
          Dashboard
        </span>
        <span className="text-gray-400 flex text-sm items-center">
          <p>This week</p>
          <ChevronDown size={16} />
        </span>
      </div>
      <div className='flex justify-between  mx-10 mb-8'>
        <AnatomySection/>
        <HealthStatusCards/>
        </div>
        <ActivityFeed/>
    </div>
  )
}

export default DashboardOverview