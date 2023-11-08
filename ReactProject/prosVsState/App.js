function App() {

     function greeting (name){
        const date = new Date()
        const hours = date.getHours()
        console.log(hours)

        let timeofDay
        if (hours >= 4 && hours < 12)
        {
            timeofDay = "morning"
        }
        else if (hours >= 12 && hours < 17)
        {
            timeofDay = " afternoon"
        }
        else if (hours >= 17 && hours < 20)
        {
            timeofDay = "evening"
        }
        else
        {
            timeofDay = "night"
        }
        return `Good ${timeofDay}, ${name}!`
     }
    console.log (greeting("Tiwalade "))

   return(

   <div>
   <p></p>
    
   </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root")) 