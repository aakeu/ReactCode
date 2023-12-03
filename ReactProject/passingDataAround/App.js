function App(){
    const [user, setUser] = React.useState("UncleBola")
    return(
    <main>
        <Header user={user} />
        <Body user={user}/>
    </main>
)}

ReactDOM.render(<App />, document.getElementById("root"))