const Persons = ({ persons, searchFilter }) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchFilter.toLowerCase()))
    return (
        <ul>
            {filteredPersons.map(person =>
                <SinglePerson key={person.name} person={person} />
            )}
        </ul>
    )
}

const SinglePerson = ({ person }) => (
    <li key={person.name}>{person.name} {person.number}</li>
)

export default Persons
