import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import List from './components/List'

function App() {
  const [people, setPeople] = useState(null)
  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const [buttonMessage, setButtonMessage] = useState("Show people")
  const [isListLoading, setListLoading] = useState(false)

  const loadAPI = async () => {
    setButtonDisabled(true)
    setListLoading(true)
    try {
      const response = await axios.get('https://swapi.dev/api/people')
      if (response.status === 200) {
        setPeople(response.data.results)
        setListLoading(false)
        setButtonMessage("Success")
        console.log(response.data.results)
      }
      else {
        throw new Error("Bad response")
      }
    }
    catch (err) {
      console.log(err)
      setButtonMessage("Something went wrong")
      setListLoading(false)
    }
  }

  return (
    <>
      <Header />
      <button disabled={isButtonDisabled} onClick={loadAPI}>{buttonMessage}</button>
      {
        isListLoading ? <div>Loading...</div> : <List data={people} />
      }
    </>
  )
}

export default App
