import React from 'react'

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h1>
                {props.products} 
            </h1>
        </div>
    )
}

export default ItemListContainer
