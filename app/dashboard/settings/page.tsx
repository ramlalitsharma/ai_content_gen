import React from 'react'
import { UserProfile } from '@clerk/nextjs'
function settings() {
  return (
    <div className='flex items-center justify-center '>
       <UserProfile/>
    </div>
  )
}

export default settings
