function Air() {
    console.log(data)
    const CardElements = data.map(card => {
             return <Card 
             key={card.id} // id is always unique that is why
            card={card}
            />

            {/* <Card 
             key={card.id} // id is always unique that is why
            img={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots}
            /> */}

            })


    return(
    
    <div>


          <Navbar />
             
     <Hero />
   <section className="cards-list">
    {CardElements}
    </section> 
    
     
    
    </div> 
    )
}

ReactDOM.render(<Air />, document.getElementById("root"))



// function App() {
//     const JokeElements = JokeData.map(joke => {
//      return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//      return(
//      <div >
//          {JokeElements}
//      </div> 
//      )
//  }
 
//  ReactDOM.render(<App />, document.getElementById("root"))