import React from 'react'

const IpDetails = ({ipDetails}:any) => {

    const { ip, location, isp } = ipDetails;
    return (
    <div className='container'>
        <ul>
            <li>
                <div className="info">
                    <span className="title">IP ADDRESS</span>
                    <p className='content'>{ip}</p>
                </div>
            </li>
            <li>
                <div className="info">
                    <span className="title">LOCATION</span>
                    <p className='content'>{location.city}, {location.region}</p>
                </div>
            </li>
            <li>
                <div className="info">
                    <span className="title">TIMEZONE</span>
                    <p className='content'>UTC{location.timezone}</p>
                </div>
            </li>
            <li>
                <div className="info">
                    <span className="title">ISP</span>
                    <p className='content'>{isp}</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default IpDetails