'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Search_Function } from '@/api'
import SearchBar from '@/components/SearchBar'
import styles from './page.module.css'

const LogoVariants = {
  visible: {
    height: 'auto',
    marginBottom: '70px',
  },
  hidden: {
    height: 0,
    marginBottom: 0,
  },
}

export default function Home() {
  const [search, setSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searchFocus, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState<string[]>()

  useEffect(() => {
    const SendSearch = setTimeout(async function () {
      const result = await Search_Function(searchText)
      setSearchResults(result.data[1])
    }, 1000)

    return () => clearTimeout(SendSearch)
  }, [searchText])

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.group}
        variants={LogoVariants}
        initial="visible"
        animate={search ? 'hidden' : 'visible'}
        exit="hidden"
      >
        <Image
          className={styles.logo}
          src="/logo.svg"
          width={150}
          height={100}
          alt="logo"
        />
        <h1 className={styles.title}>Poe Wiki Mobile</h1>
      </motion.div>
      <SearchBar
        search={search}
        searchText={searchText}
        onBackClick={() => {
          setSearch(false)
          setSearchText('')
          setSearchResults([''])
        }}
        onSearchBarClick={() => setSearch(true)}
        onInputChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        resultsArray={searchResults}
        onInputFocus={() => setSearchFocus(true)}
        onInputBlur={() => setSearchFocus(false)}
        searchFocus={searchFocus}
      />
      {!search && (
        <motion.button
          className={styles.browse}
          onClick={search ? () => {} : () => setSearch(false)}
          initial={{ opacity: search ? 0 : 1 }}
          animate={{ opacity: search ? 0 : 1 }}
          exit={{ opacity: 0 }}
        >
          Browse Database
        </motion.button>
      )}
    </main>
  )
}
