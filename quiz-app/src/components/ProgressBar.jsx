import React from 'react'
import '.././App.css'

function ProgressBar({ progress }) {
  return (
    <div className='progress-bar-container'>
        <div className='progress-bar' style={{
            width: `${progress}%`
        }}>
            {progress}%
        </div>
    </div>
  )
}

export default ProgressBar
