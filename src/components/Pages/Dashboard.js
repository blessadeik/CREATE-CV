import React from 'react'

const Dashboard = () => {

    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))

  return (
    <div className="welcome">
        <h3>Welcome to CreatCV, {userDetails.name}</h3>
    </div>
  )
}

export default Dashboard