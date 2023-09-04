const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Ashka" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))