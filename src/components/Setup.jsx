import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Setup = () => {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke'
  const [jokes, setJokes] = useState([])
  // const [punchline, setPunchline] = useState([[]])
  const [showText, setShowText] = useState(false)

  const getJokesData = async () => {
    const resp = await axios.get(apiUrl)
    setJokes(resp.data)
  }

  useEffect(() => {
    getJokesData()
    setShowText()
  }, [])

  const refreshPage = () => {
    window.location.reload()
  }
  return (
    <>
      <section className="joke-box">
        <p>{jokes.en}</p>
        {showText && <p>-{jokes.setup}</p>}
      </section>

      {/* <section className="joke-box">
        <p>{jokes.en}</p>
        {showText && <p>-{jokes.punchline}</p>}
      </section> */}

      <section className="buttons">
        <button onClick={() => setShowText(jokes.setup)}>Get a Joke</button>

        <button onClick={() => setShowText(jokes.punchline)}>Punchline</button>
        <button onClick={() => refreshPage()}>Refresh</button>
      </section>
    </>
  )
}

export default Setup
