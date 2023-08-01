import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import "./PersonView.css"
import Header from "../components/Header";

type Props = {
    header: string,
    data: string
}
const Row = ({ header, data }: Props) => {
    return <tr>
        <td>{header}</td>
        <td>{data}</td>
    </tr>
}

const PersonView = () => {
    let { personId } = useParams();
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)
    const [person, setPerson] = useState<any>(null)


    const getPersonData = async () => {
        axios
            .get(`https://swapi.dev/api/people/${personId}`)
            .then((res) => {
                setPerson(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false)
                setError(true)
            })
    }

    useEffect(() => {
        getPersonData()
    }, [])

    return <>
        <Header/>
        <h2>Character info</h2>
        {isLoading ? <Loader /> :
            isError ? <h2 className="error">User with ID {personId} not found.</h2> : person && <table className="table">
                <tbody>
                    <Row header="Name" data={person.name} />
                    <Row header="Height" data={person.height} />
                    <Row header="Mass" data={person.mass} />
                    <Row header="Hair color" data={person.hair_color} />
                    <Row header="Skin color" data={person.skin_color} />
                    <Row header="Eye color" data={person.eye_color} />
                    <Row header="Birth year" data={person.birth_year} />
                    <Row header="Gender" data={person.gender} />
                </tbody>
            </table>}
    </>
}

export default PersonView