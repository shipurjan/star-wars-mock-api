import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PersonView = () => {
    let { personId } = useParams();
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [personData, setPersonData] = useState(null)


    const getPersonInfo = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/people/${personId}`)
            return response
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {

    }, [])

    useEffect(() => {
        axios
          .get(`https://swapi.dev/api/people/${personId}`)
          .then((res) => {
            setPersonData(res.data)
          })
      })



    return personData && <div>
        {personData.name}
    </div>
}

export default PersonView