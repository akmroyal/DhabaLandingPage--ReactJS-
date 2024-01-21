import React, { useState } from 'react'


export default function TextForm(props) {
    // props keyword helps to edit/transfer a value from other file 

    const [text, setText] = useState('Enter Text Here...');
    // whenever we want to change useState value we use like this : setText="which_u_want"

    const onChangeHandler = (event) => {
        setText(event.target.value);
        // if you don't use it then it cannot change textarea values

    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // here use JS concept to change text into upper case 
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // here use JS concept to change text into lower case 
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        // here use JS concept to change text into lower case 
    }
    
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary my-4 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary my-4 mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-4 mx-1" onClick={handleClearClick}>Clear</button>
                    {/* Here button tag has property of Bootstrap which helps to design it */}
                </div>
            </div>
            <div className="container">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                {/* here '.split("space").length' is work to count word when space is includes and 'text.length' is used to count char one by one  */}
                <h1>Preview of your Words/Paragraph</h1>
                {/* <button className="btn btn-primary" onClick={text_preview}>Preview Text</button> */}
                <p>{text.toUpperCase()}</p>
            </div>
        </>
    )
}
