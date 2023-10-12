function App() {
    return(
    <div >
    <Joke   punchline="just the punchline"
    isFunny={true}
    upvotes={10}
    downvotes={2}
    comments={[{author: "", body: "", title: "" }]} 
    />
     <Joke setup="I got my dauther a fridge for her birtday." 
     punchline="I can't wait to see her face light up when see"
       isFunny={false}
       />
     <Joke setup="How did the hacker escape the police?" 
     punchline="He just ransomware"
       isFunny={true}
       />
     <Joke setup="Why don't pirate travel on mountain roads?" 
     punchline="Scurvy"
       isFunny={true}
       />
     <Joke setup="why do bees stay in the hive in the winter?"
     punchline="Swarm"
        isFunny={true}
        />
     <Joke setup="what's the best thing about switzerland" 
     punchline="they enjoy it "
       isFunny={false}
       />

    </div> 
    )
}

ReactDOM.render(<App />, document.getElementById("root"))