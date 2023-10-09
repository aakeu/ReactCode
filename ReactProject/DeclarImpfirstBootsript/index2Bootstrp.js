function MainContent(){
    return(
        <h1>Learning fast with Scrimba</h1>
    )
}

ReactDOM.render(<div>
    <Navbar />
    <MainContent/>
</div>,
document.getElementById('root')
)