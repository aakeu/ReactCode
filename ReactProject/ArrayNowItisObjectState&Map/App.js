function App() {
    const [contact, setContact] = React.useState({
        firstName: "Uncle",
        lastName: "Bola",
        phone: "+1 (719) 555-1212",
        email: "UncleBola@4family.com",
        isFavourite: false
})

  let starIcon = contact.isFavourite ?  "Goldenstar.svg" :  "star.svg"
  
  // this is seting the new start of the star 
      function toggleFavourite(){
        setContact(prevContact => {
          return{
            ...prevContact,
            isFavourite: !prevContact.isFavourite
          }
        })
      
      }
  

      
      return(
     <main>
      <article className="card">
        <img src="./images/users.jpeg" className="card--image" />
        <div className="card--info">
            <img 
            src={`./images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavourite}
            />
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
        </div>
      </article>
      
     </main>
      )
  }
  
  ReactDOM.render(<App />, document.getElementById("root")) 


 