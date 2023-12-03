window.Form = function Form(props) {
    const [firstName, setFirstName] = React.useState ("")
    const [lastName, setLastName] = React.useState ("")

    console.log(firstName, lastName)
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    return(
        <form>
           <input 
           type="text"
           placeholder="First Name"
           onChange={handleFirstNameChange}
           />

            <input 
           type="text"
           placeholder="Last Name"
           onChange={handleLastNameChange}
           />
        </form>
    )
}

//anoter method

window.Form = function Form(props) {
    const [firstName, setFirstName] = React.useState ("")
    const [lastName, setLastName] = React.useState ("")

    console.log(firstName, lastName)
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    return(
        <form>
           <input 
           type="text"
           placeholder="First Name"
           onChange={handleFirstNameChange}
           />

            <input 
           type="text"
           placeholder="Last Name"
           onChange={handleLastNameChange}
           />
           <textarea value={formData.comments} 
           placeholder="Comment"
           onChange={handleChange}
           name="comments"
           />
         
        </form>
    )
}

