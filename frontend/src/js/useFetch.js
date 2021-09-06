import { useState, useEffect } from "react"

const useFetch = (dataURL) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const abortcont = new AbortController()

    fetch(dataURL, {
      signal: abortcont.signal,
      mode: "cors"
    })
      .then(res => {
        if (!res.ok) {
          console.log(res)
          throw new Error(`couldnt fetch data for this resource`)
        }
        return res.json()
      })
      .then(data => {
        setError(null)
        setData(data)
        setIsLoading(false)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('aborted');
        } else {
          setError(err.message)
          setIsLoading(false)
        }
      })

    return () => abortcont.abort()

  }, [dataURL])

  return { data, isLoading, error }
}

export default useFetch