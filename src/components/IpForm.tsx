import React from 'react'
import './index.scss'

const IpForm = () => {

  return (
    <form action="">
        <label htmlFor="ip-number">Ip number</label>
        <input type="text" />
        <button type='submit'>
            <img src="icon-arrow.svg" alt="arrow" />
        </button>
    </form>
  )
}

export default IpForm