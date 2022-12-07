import React, { useState } from 'react'
import styles from './style.module.scss'
import { FiMoreVertical, FiSearch } from "react-icons/fi";
import { FormControl, ListItemIcon, Menu, MenuItem, Select } from '@mui/material';
import ChatListItem from './ChatListItem';
import ChatHeader from '../chatbox/ChatHeader';

const ChatList = () => {
  const [age, setAge] = React.useState('All Chats');
  const [open, setOpen] = useState(false)

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClick = () => {
    setOpen(true)
  }

  return (
    <div className={styles.ChatContent}>
      <div className={styles.ChatWrapper}>
        <div className={styles.ChatList}>
          <div className={styles.logo}>
            <div>
              Chat
            </div>
            <div>
              <a href="js:" onClick={() => handleClick()}>
                <FiMoreVertical />
              </a>
            </div>
          </div>
          <div className={styles.searchBox}>
            <div>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <Select
                  id="demo-select-small"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value='All Chats'>All Chats</MenuItem>
                  <MenuItem value='Friends'>Friends</MenuItem>
                  <MenuItem value='Groups'>Groups</MenuItem>
                  <MenuItem value='Unread'>Unread</MenuItem>
                  <MenuItem value='Archived'>Archived</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <form action="">
                <div className={styles.searchField}>
                  <input type="text" placeholder='Search User..' />
                  <div className={styles.searchicon}>
                    <FiSearch />
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <div className={styles.userList}>
          <ChatListItem />
        </div>
      </div>
      <ChatHeader />
    </div>
  )
}

export default ChatList
