window.Travel = function Travel(props){
  
    return(

    <div>
       
        <div className="Travel--container">
        <img 
        src={`./images/${props.travel.imageURL}`}
        alt="lovely place"
        className="card--image"
        />
        <div className="location--div">
            <div className="location--Container">
                <h4>{props.travel.location}</h4>
                <p><a href={props.travel.googleMaps ? 'has-link' : ''}>View on Google Maps</a></p>
               
            </div>
            <h1 className="location--Name">{props.travel.title}</h1>
            <p className="Travel--Date">{props.travel.startDate} - {props.travel.endDate}</p>
            <p className="Travel--Description">{props.travel.description}</p>
        </div>
        </div>
    </div>


 )
}