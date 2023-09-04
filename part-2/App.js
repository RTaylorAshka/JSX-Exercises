const App = (props) => {
    let tweets = props.tweets.map((t) => <Tweet username={t.username} name={t.name} date={t.date} msg={t.msg} />)
    return (
        <div>
            {tweets}
        </div>
    )
}

let tweetData = [
    {
        username: "JohnSmith3000",
        name: "John Smith",
        date: "10/5/2019",
        msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        username: "SohnJmith45",
        name: "Sohn Jmith",
        date: "12/3/1998",
        msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        username: "JohnusSmithiusTheGreat",
        name: "Johnus Smithius",
        date: "1400 BC",
        msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
]

ReactDOM.render(<App tweets={tweetData} />, document.getElementById("root"))