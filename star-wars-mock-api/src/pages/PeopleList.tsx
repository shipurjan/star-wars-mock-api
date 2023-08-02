import { useEffect, useState } from 'react'
import './PeopleList.css';
import axios from 'axios'
import Header from '../components/Header'
import List from '../components/List'
import Loader from '../components/Loader';


const PeopleList = () => {
  const [people, setPeople] = useState(null)
  const [isListLoading, setListLoading] = useState(true)
  const [nextButtonUrl, setNextButtonUrl] = useState(null)
  const [prevButtonUrl, setPrevButtonUrl] = useState(null)

  const getPeopleList = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.results)
        setPeople(res.data.results)
        setNextButtonUrl(res.data.next)
        setPrevButtonUrl(res.data.previous)
        setListLoading(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getPeopleList('https://swapi.dev/api/people/?page=1')
  }, [])

    return <>
        <Header />
        <h2>Star Wars character list</h2>
        {
            isListLoading ? <Loader/> : <List data={people} />
        }
        <div className='buttons'>
          {prevButtonUrl && <button onClick={() => getPeopleList(prevButtonUrl)} className='prev btn'>&lt; prev</button>}
          {nextButtonUrl && <button onClick={() => getPeopleList(nextButtonUrl)} className='next btn'>next &gt;</button>}
        </div>
    </>
}

export default PeopleList