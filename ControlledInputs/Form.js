window.Form = function Form(props) {
 const [formData, setFormData] =React.useState(
    {
    firstName: "", 
    lastName: "", 
    email: "",
    isFriendly: true,
    employment: ""
}

 )

 function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return{
            ...prevFormData,
            [name]: type === "checkbox" ? checked: value
            // [event.target.name]: event.target.value

        }
    })
 }

    return(
     <form>
       <input 
       type="text"
       placeholder="First Name"
       onChange={handleChange}
       name="firstName"
       value={formData.firstName}
       />
          <input 
       type="text"
       placeholder="Last Name"
       onChange={handleChange}
       name="lastName"
       value={formData.lastName}
       />
        <input 
       type="email"
       placeholder="Email"
       onChange={handleChange}
       name="email"
       value={formData.email}
       />
       <input 
       type="checkbox"
       id="isFriendly"
       name="isFriendly"
       checked={formData.isFriendly}
       onChange={handleChange}
       />
       <label htmlfor="isFriendly">Are you friendly?</label>
       <br />
       <br />

       <fieldset>
        <legend> Current employment status</legend>


        <input 
        type="radio"
        id="unemployed"
        name="employment"
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br/>
        <input 
        type="radio"
        id="part-time"
        name="employment"
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
       </fieldset>

    </form> 

    )
}