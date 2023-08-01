import { Link } from "react-router-dom"

function List({ data }: PersonList) {
    return data !== null && (
        <ul className="list"> {
            data.map((person: any, index: number) => {
                return <li key={person.name}>
                    <Link to={`/people/${(index+1).toString()}`}>
                        {person.name}
                    </Link>
                </li>
            })
        } </ul>
    )
}

export default List