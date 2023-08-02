import { Link } from "react-router-dom"

function List({ data }: (any[] | null)) {
    return data !== null && (
        <ul className="list"> {
            data.map((person: any) => {
                // Getting the person ID from URL value like "https://swapi.dev/api/people/14/"
                const personId = person.url.split("/").slice(-2,-1)
                return <li key={person.name}>
                    <Link to={`/people/${personId}`}>
                        {person.name}
                    </Link>
                </li>
            })
        } </ul>
    )
}

export default List