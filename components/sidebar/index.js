import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'
import { IoCallOutline, IoChatbubblesOutline, IoPersonCircleOutline } from "react-icons/io5";
import { FaIoxhost } from "react-icons/fa"
import { RiPhoneLine, RiQuestionAnswerLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaIoxhost />
      </div>
      <ul>
        <li>
          <Link href={"/chats"}><RiQuestionAnswerLine /></Link>
        </li>
        <li>
          <Link href={"/call"}><RiPhoneLine /></Link>
        </li>
        <li>
          <Link href={"/profile"}><IoPersonCircleOutline /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
