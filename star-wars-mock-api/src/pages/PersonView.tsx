import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import "./PersonView.css"

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
                console.log(res.data)
            })
    }

    useEffect(() => {
        getPersonData()
    }, [])

    return isLoading ? <Loader /> : <>{
        person && <table className="table">
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
        </table>
    }</>
}

export default PersonView