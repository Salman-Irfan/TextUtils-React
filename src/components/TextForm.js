import React, { useState } from 'react'

const TextForm = (props) => {

    const [text, setText] = useState('')

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    };

    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("text is cleared", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value)
    };

    const handleCopy = (event) => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("text is copied to clipboard", "success")
    };

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("extra spaces has been removed", "success")
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control"
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? '#042743' : 'white'
                        }}
                        id="myBox" rows={8} value={text} onChange={handleOnChange}
                    />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }} >
                <h1>Your text Summary </h1>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            </div>
        </>
    )
}

export default TextForm
