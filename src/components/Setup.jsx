import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Setup = () => {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke'
  const [jokes, setJokes] = useState([])
  const [showText, setShowText] = useState(false)

  const getJokesData = async () => {
    const resp = await axios.get(apiUrl)
    setJokes(resp.data)
  }

  const refreshPage = () => {
    window.location.reload()
  }
  return (
    <>
      <section className="joke-box">
        <p>{jokes.setup}</p>
        {showText && <p>-{jokes.punchline}</p>}
      </section>

      <section className="buttons">
        <button onClick={getJokesData}>Get a Joke</button>

        <button onClick={() => setShowText(!showText)}>Punchline</button>
        <button onClick={() => refreshPage()}>Refresh</button>
      </section>
    </>
  )
}

export default Setup
