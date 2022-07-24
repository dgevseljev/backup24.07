import React, {useState} from 'react';
import CardCgt from './CardCgt/CardCtg';


const Grid = function() {

    const categories = [
        {id: 1, title: 'Js 1'},
        {id: 2, title: 'Js 2'}, 
    ]

    return (
        <section className="grid">
            {categories.map((category) => 
                <CardCgt title={category.title} key={category.id}/>
            )}
            
        </section>
)}

export default Grid;