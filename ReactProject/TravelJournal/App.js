function App() {
    console.log(Separate)
    const Travelelments = Separate.map(travel => {
             return <Travel 
             key={travel.id} // id is always unique that is why
            travel={travel}
            />
            })


    return(
    
    <div>
          <div className="Header">
            <p>🌍 my travel journal.</p>
        </div>
   <section className="cards-list">
    {Travelelments}
    </section> 
    </div> 
    )
}

ReactDOM.render(<App />, document.getElementById("root"))