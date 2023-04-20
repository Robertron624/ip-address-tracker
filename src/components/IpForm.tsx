import React from 'react'
import './index.scss'

const IpForm = ({setIp}: any) => {

  function handleSubmit (e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      ipNumber: { value: string };
    };
    const ip = target.ipNumber.value;
    console.log("ip to search -> ", ip)
    setIp(ip);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="ipNumber">Ip number</label>
        <input type="text" name='ipNumber'/>
        <button type='submit'>
            <img src="icon-arrow.svg" alt="arrow" />
        </button>
    </form>
  )
}

export default IpForm