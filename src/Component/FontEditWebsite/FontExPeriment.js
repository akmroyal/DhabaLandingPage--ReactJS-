import About from "./About"
import NavBar from "./NavBar"
import TextForm from "./TextForm"

// *********************** Here are the linking of the FontExPeriment Application


function App() {
    return (
        <>
            <NavBar/>
            <div className="my-5">
                <TextForm heading="Enter Text to analyze" />
            </div>
            <div className="container">
                <About />
            </div>
        </>
    )
}

export default App

