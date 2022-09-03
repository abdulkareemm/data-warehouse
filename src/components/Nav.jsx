import React from 'react'

// import navigations data
import {navigationData} from "../data"

 
export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href} className="">
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
