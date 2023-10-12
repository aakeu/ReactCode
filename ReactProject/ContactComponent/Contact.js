// window.Contact = function Contact ({img, name, phone, mail}){
//     console.log(img, name, phone, mail)
//     return(
//         <div className="contact-card">
//         <img 
//             src={img}
//             alt="cat pics"
//             className=""
//             />
//              <h3>{name}</h3>
//         <div className="info-group">
//              <img 
//             src="./images/phone.svg"
//             alt="cat pics"
//             className=""
//             /> 
//             <p>{phone}</p>
//              </div>
//              <div className="info-group">
//                 <img 
//                 src="./images/mail.svg"
//                 alt="phone pics"
//                 className=""
//                 /> 
//                 <p>{mail}</p>
//              </div>
//         </div>
//     )
// }

// another method -Props more better 
window.Contact = function Contact (props){
    console.log(props)
    return(
        <div className="contact-card">
        <img 
            src={props.img}
            alt="cat pics"
            className=""
            />
             <h3>{props.name}</h3>
        <div className="info-group">
             <img 
            src="./images/phone.svg"
            alt="cat pics"
            className=""
            /> 
            <p>{props.phone}</p>
             </div>
             <div className="info-group">
                <img 
                src="./images/mail.svg"
                alt="phone pics"
                className=""
                /> 
                <p>{props.mail}</p>
             </div>
        </div>
    )
}