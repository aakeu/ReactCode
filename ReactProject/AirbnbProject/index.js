function Air() {
    return(
    
    <div>


          <Navbar />
             
     <Hero />
        <Card
        img="airswim.jpeg"
        alt="swiming woman"
        rating="5.0"
        reviewCount="(6)"
        country="Turkey"
        title="Life Lesson with Katie Zaferess"
        price="146"/>


   
    
     
    
    </div> 
    )
}

ReactDOM.render(<Air />, document.getElementById("root"))