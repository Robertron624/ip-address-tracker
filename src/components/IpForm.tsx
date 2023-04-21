import React from 'react'
import './index.scss'

const IpForm = ({setIp}: any) => {

  function handleSubmit (e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      ipNumber: { value: string };
    };
    const ip = target.ipNumber.value;

    const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (!ipRegex.test(ip)) {
      alert('Please enter a valid IP address');
      return;
    }

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