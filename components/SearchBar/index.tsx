import { ReactElement } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import styles from './styles.module.css'

interface SearchBarTypes {
  search: boolean
  onBackClick: () => void
  onSearchBarClick: () => void
  searchText: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  resultsArray?: string[]
  searchFocus: boolean
  onInputFocus: () => void
  onInputBlur: () => void
}

export default function SearchBar({
  search,
  searchText,
  onBackClick,
  onSearchBarClick,
  onInputChange,
  resultsArray,
  onInputFocus,
  onInputBlur,
  searchFocus,
}: SearchBarTypes) {
  console.log(resultsArray)

  return (
    <>
      <div className={styles.searchGroup}>
        {search && (
          <button className={styles.searchBack} onClick={onBackClick}>
            <IoMdArrowBack size="100%" />
          </button>
        )}
        <input
          className={styles.search}
          placeholder="search..."
          onClick={onSearchBarClick}
          value={searchText}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
      </div>
      {resultsArray && resultsArray[0] !== '' && searchFocus && (
        <div className={styles.resultsCont}>
          {resultsArray.map((o, i) => {
            return (
              <div key={i} className={styles.resultsLine}>
                {o}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
