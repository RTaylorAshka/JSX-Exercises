const Tweet = ({ username, name, date, msg }) => {
    return (
        <div>
            <h3>{name}</h3>
            <i>{username}</i>
            <p>{msg}</p>
            <p>{date}</p>
        </div>
    )
}