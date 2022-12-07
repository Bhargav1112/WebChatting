import { Avatar } from '@mui/material'
import React from 'react'
import styles from '../chatList/style.module.scss'
import { IoVideocamOutline } from "react-icons/io5";
import { RiPhoneLine } from 'react-icons/ri';
import { FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';

const ChatHeader = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  return (
    <div className={styles.ChatHeaderWrapper}>
      <div className={styles.ChatHeader}>
        <div className={styles.ChatLogo}>
          <Avatar />
          <div className={styles.HeaderDetails}>
            <h5>Rushabh Antala</h5>
            <p>Online</p>
          </div>
        </div>
        <div className={styles.HeaderFeature}>
          <IoVideocamOutline />
          <RiPhoneLine />
          <a href='js:' onClick={() => handleClick()}>
            <FiMoreVertical />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
