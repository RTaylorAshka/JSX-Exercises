const Person = ({ name, age, hobbies }) => {

    return (
        <div>
            <h3>{age >= 18 ? "Please go vote!" : "You must be 18."}</h3>
            <p>Learn more about this person:</p>
            <span>{name.length > 8 ? name.slice(0, 6) : name}, {age}</span>
            <p>Hobbies: </p>
            <ul>
                {hobbies.map((h) => <li>{h}</li>)}
            </ul>

        </div>
    )
}