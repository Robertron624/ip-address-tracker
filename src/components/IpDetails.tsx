import React from 'react'

const IpDetails = ({ipDetails}:any) => {

    const { ip, location, isp } = ipDetails;
    return (
    <div className='container'>
        <ul>
            <li>
                <span className="title">IP ADDRESS</span>
                <p className='content'>{ip}</p>
            </li>
            <li>
                <span className="title">LOCATION</span>
                <p className='content'>{location.city}, {location.region}</p>
            </li>
            <li>
                <span className="title">TIMEZONE</span>
                <p className='content'>UTC{location.timezone}</p>
            </li>
            <li>
                <span className="title">ISP</span>
                <p className='content'>{isp}</p>
            </li>
        </ul>
    </div>
  )
}

export default IpDetails