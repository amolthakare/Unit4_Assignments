import React from "react";

const style =(id) => {
    if(id==1){
        style.background;
    }
}

const Payment = (props) => {
    return (
        <div className="first">
            {props.payment.map((payment) =>(
                <div className="second">

                    <div className="third">
                        <p>{payment.data}</p>
                        <img src={payment.image}/>
                    </div>

                    <button>Case Study</button>
                    <h1>{payment.company}</h1>
                    <h1>{payment.type}</h1>
                    <p>{payment.product}</p>

                </div>
            ))}
        </div>
    )
}

export default Payment;