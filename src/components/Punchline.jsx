import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Punchline = () => {
  const apiUrl = 'https://official-joke-api.appspot.com/random_joke'
  const [jokes, setJokes] = useState([[]])
  // const [showText, setShowText] = useState(jokes.punchline)
  const getJokeData = async () => {
    const resp = await axios.get(apiUrl)
    setJokes(resp.data)
  }

  useEffect(() => {
    getJokeData()
    // setShowText()
  }, [])

  return (
    <>
      <main>
        {jokes.map((joke, i) => {
          return (
            <section className="jokeBox" key={i}>
              <p>{joke.en}</p>
              <p>-{joke.punchline}</p>
              {/* </section>
            
            <div className="buttons">
            
    
            <button onClick={() => setShowText(jokes.punchline)}>Punchline</button>
           
          </div> */}
            </section>
          )
        })}
      </main>
    </>
  )
}
export default Punchline
