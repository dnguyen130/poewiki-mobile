"use client"
import { useState } from "react";
import Image from 'next/image'
import { motion } from "framer-motion";
import { IoMdArrowBack } from "react-icons/io";
import { Search_Function } from "@/api";

import styles from './page.module.css'

const LogoVariants = {
  visible: {
    height: "auto",
    marginBottom: "70px"
  },
  hidden: {
    height: 0,
    marginBottom: 0
  }
}

export default function Home() {
  const [ search, setSearch ] = useState(false);
  const [ searchText, setSearchText ] = useState("");
  const [ req, setReq ] = useState(false);

  const OnSearch = (search_value: string) => {
    setSearchText(search_value);
    console.log(searchText);
    if (!req) {
      setReq(true);
      setTimeout(function () {
        const result = Search_Function(search_value);
        console.log(result);
        setReq(false);
      }, 2000);
    }
  }

  return (
    <main className={styles.main}>
      <motion.div  
      className={styles.group} 
        variants={LogoVariants}
        initial="visible"
        animate={search ? "hidden" : "visible"}
        exit="hidden" >
        <Image className={styles.logo} src="/logo.svg" width={150} height={100} alt="logo" />
        <h1 className={styles.title}>Poe Wiki Mobile</h1>
      </motion.div>
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
          onChange={(e) => OnSearch(e.target.value)} />
      </div>
        <motion.button 
          className={styles.browse} 
          onClick={() => setSearch(false)}
          initial={{ opacity: search ? 0 : 1 }}
          animate={{ opacity: search ? 0: 1 }}
          exit={{ opacity: 0 }}>
            Browse Database
        </motion.button>
    </main>
  )
}
