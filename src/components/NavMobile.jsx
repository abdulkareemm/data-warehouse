import React from 'react'

// import navigations data
import {navigationData} from "../data"

export default function NavMobile() {
  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4 '>
      {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href} className="text-white">{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
