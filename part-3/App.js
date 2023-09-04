const App = ({ people }) => {
    return (
        <div>
            {people.map((p) => <Person name={p.name} age={p.age} hobbies={p.hobbies} />)}
        </div>
    )
}

const PeopleData = [
    {
        name: "Alice",
        age: 30,
        hobbies: ["Painting", "Reading", "Hiking"]
    },
    {
        name: "Bob",
        age: 25,
        hobbies: ["Playing guitar", "Cooking", "Photography"]
    },
    {
        name: "Charlie",
        age: 17,
        hobbies: ["Basketball", "Traveling", "Writing"]
    }
]

ReactDOM.render(<App people={PeopleData} />, document.getElementById("root"))