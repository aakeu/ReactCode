function Index() {
    return(
        <div className="contacts">

        <Contact 
        img="./images/pics1.jpeg"
        name="Mr.Whiskerson"
        mail="mr.whishaz@catnap.meow"
        phone="(212) 555-1234"
        />
        <Contact 
          img="./images/pics2.jpeg"
          name="Fluffykinsn"
          mail="fluff@me.com"
          phone="(212) 555-2345"
          /> 
      <Contact 
          img="./images/pics3.jpeg"
          name="Felix"
          mail="ffelixmr@you.com"
          phone="(212) 555-5638"
          />  

    <Contact 
          img="./images/pics4.jpeg"
          name="Pumpkins"
          mail="pumpkins@us.com"
          phone="(212) 555-3017"
          /> 
        </div>

    )
}

ReactDOM.render(<Index />, document.getElementById("root"))



