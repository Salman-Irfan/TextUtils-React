import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{height: '50px'}}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type}  fade show`} role="alert">
                    <strong> {capitalize(props.alert.type)} </strong> {props.alert.msg}
                </div>

            </div>}
        </div>
    )
}

export default Alert