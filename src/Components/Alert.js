import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        // this funtion will capitalize the first letter of the alert type without altering the original value of alert type
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        //as alert is null by default, we cannot read its type and msg value which throws an error so we use && operator which will work like if alert is null then further jsx will not get executed
       props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}
