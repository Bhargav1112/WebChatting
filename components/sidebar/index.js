import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      Sidebar
      <ul>
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/chats"}>Message</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
