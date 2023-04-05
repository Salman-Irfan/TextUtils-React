import React from 'react'

const About = (props) => {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'rgb(36 74 104)',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'rgb(36 74 104)',
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'rgb(36 74 104)' }}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Our text utils app provides you with a hassle-free way to analyze your text quickly and easily. With just a few clicks, you can convert your text to upper case, lower case, remove extra spaces, and even count the number of words and characters. With our app, you'll be able to analyze your text in no time, making your writing process faster and more efficient.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free To Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                We believe in providing our users with the best possible experience, which is why our text utils app is completely free to use. You don't need to pay any subscription fees or download any software to use our app. You can access it from anywhere with an internet connection.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Our text utils app is compatible with all modern browsers, including Chrome, Firefox, Safari, and Edge. You can use our app on any device, whether it's a desktop computer, laptop, or mobile device. Our app is designed to work seamlessly across all devices and browsers, ensuring that you have access to our text analysis tools whenever you need them.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
