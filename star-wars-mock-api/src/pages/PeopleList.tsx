import { useEffect, useState } from 'react'
import './PeopleList.css';
import axios from 'axios'
import Header from '../components/Header'
import List from '../components/List'
import Loader from '../components/Loader';


const PeopleList = () => {
  const [people, setPeople] = useState(null)
  const [isListLoading, setListLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people')
      .then((res) => {
        setPeople(res.data.results)
        console.log(res.data.results)
        setListLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

    return <>
        <Header />
        {
            isListLoading ? <Loader/> : <List data={people} />
        }
    </>
}

export default PeopleList