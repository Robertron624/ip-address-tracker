import React from 'react'
import './index.scss'

const IpForm = ({setIp, setDomain}: any) => {

  function handleSubmit (e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      ipNumber: { value: string };
    };
    const ipOrDomain = target.ipNumber.value;

    const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;
    if (ipRegex.test(ipOrDomain)) {
      setDomain("")
      setIp(ipOrDomain);
      return
    }

    if (domainRegex.test(ipOrDomain)) {
      setIp("");
      setDomain(ipOrDomain);
      return
    }

    alert('Please enter a valid ip or domain')
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