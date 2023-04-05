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

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('copied to clipboard', 'success')
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
                            backgroundColor: props.mode === 'light' ? 'white' : '#13466e',
                            color: props.mode === 'light' ? '#042743' : 'white'
                        }}
                        id="myBox" rows={8} value={text} onChange={handleOnChange}
                    />
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my=1" onClick={handleUpClick}>CONVERT TO UPPER CASE</button>
                <button disabled={text.length === 0} className="btn btn-secondary mx-2 my=1" onClick={handleLoClick}>Convert to lower case</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2 my=1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2 my=1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2 my=1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? '#042743' : 'white' }} >
                <h1>Your text Summary </h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Nothing to Preview"} </p>
            </div>
        </>
    )
}

export default TextForm
