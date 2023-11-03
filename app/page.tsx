"use client"
import { useState } from "react";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";

import styles from './page.module.css'

export default function Home() {
  const [ search, setSearch ] = useState(false);
  const [ searchText, setSearchText ] = useState("");

  return (
    <main className={styles.main}>
      <AnimatePresence>
      {!search && (
      <motion.div  
        className={styles.group} 
        initial={{ height: search ? "auto" : 0, marginBottom: search ? 0 : "70px" }} 
        animate={{ height: search ? 0 : "auto", marginBottom: search ? 0 : "70px" }} 
        exit={{ height: 0, marginBottom: 0 }} >
        <Image className={styles.logo} src="/logo.svg" width={150} height={100} alt="logo"></Image>
        <h1 className={styles.title}>Poe Wiki Mobile</h1>
      </motion.div>)}
      </AnimatePresence>
      <div className={styles.searchGroup}>
          {search && (<button 
            className={styles.searchBack} 
            onClick={() => {
              setSearch(false);
              setSearchText("");
            }}
          >
            <IoMdArrowBack size="100%" />
          </button>)}
        <input 
          className={styles.search} 
          placeholder="search..." 
          onClick={() => setSearch(true)} 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <AnimatePresence>
        {!search && (
          <motion.button 
            className={styles.browse} 
            onClick={() => setSearch(false)}
            initial={{ opacity: search ? 0 : 1 }}
            animate={{ opacity: search ? 0: 1 }}
            exit={{ opacity: 0 }}>
              Browse Database
          </motion.button>)}
      </AnimatePresence>
    </main>
  )
}
