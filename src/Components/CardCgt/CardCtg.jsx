import React from 'react';


const CardCgt = function({title}) {

    function goToProducts() {
        console.log(title);
    }

    return (
        <div className="card" onClick={goToProducts}>
            <p className="card-name">{title}</p>
            <div className="arrow"></div>
        </div>
)}

export default CardCgt;