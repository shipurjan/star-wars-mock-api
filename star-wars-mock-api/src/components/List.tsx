function List({ data }: PersonList) {
    return data !== null && (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((person: any) => {
                        return <tr key={person.name}>
                            <td>{person.name}</td>
                            <td>{person.height}</td>
                            <td>{person.mass}</td>
                            <td>{person.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default List