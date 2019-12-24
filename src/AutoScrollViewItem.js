import React from 'react';
import './AutoScrollViewItem.css'

function AutoScrollViewItem({position,city,time}) {
  
  return (
    <li className="position-item">
      <a className="position" href="/#">{position}</a>
      <span className="city">{city}</span>
      <span className="time">{time}</span>
    </li>
  )
}

export default AutoScrollViewItem;