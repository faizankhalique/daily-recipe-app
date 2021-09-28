import React, {useEffect, useState} from 'react'

export const useSearch = (data, searchValue, keys) => {
  const [hits, setHits] = useState(data)
  useEffect(() => {
    setHits(data)
  }, [data])
  useEffect(() => {
    if (searchValue) {
      const filterValues = data.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(searchValue.toLowerCase()),
        ),
      )
      setHits(filterValues)
    } else {
      setHits(data)
    }
  }, [searchValue])
  return {hits}
}
