function List({ data }: PersonList) {
    return data !== null && (
        <ul className="list"> {
            data.map((person: any, index: number) => {
                return <li key={person.name}>
                    <a href={`/people/${(index+1).toString()}`}>
                        {person.name}
                    </a>
                </li>
            })
        } </ul>
    )
}

export default List