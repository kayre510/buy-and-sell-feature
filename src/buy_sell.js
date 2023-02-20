import React, { useState } from 'react';
import './styles.css';

function Row({ size, price, color}) {
    const priceColor = `price ${color}`;
    return(
        <div className='column'>
            <span className='size-color'>{size}</span>
            <span className={priceColor}>{price}</span>
        </div>
    );
}

function MyComponent() {
    //Use the useState hook to define the rows state
    const [rows, setRows] = useState([]);

    //Define a function that handles the Buy button click
    const handleBuyClick = () => {
        //generate a new row object with a random buy and sell values
        const newRows = [...rows, {size: Math.random(), price: 3700 + Math.random() * 2000, color: 'green'}];
        // Update the rows state with the new row object
        setRows(newRows);
    };
    const handleSellClick = () => {
        //generate a new row object with a random buy and sell values
        const newRows = [...rows, {size: Math.random(), price: 3700 + Math.random() * 2000, color: 'red'}];
        // Update the rows state with the new row object.
        setRows(newRows);
    };
    return (
        <div>
            <button onClick={handleBuyClick} className='buy-button'>Buy</button>
            <button onClick={handleSellClick} className='sell-button'>Sell</button>
            <div className='table'>
             {/* Map over the rows state and render each row with the Row component */}
             {rows.map((row, index) => (
                <div key={index}>
                    <Row {...row} />
                </div>
             ))}
            </div>
        </div>
    );
}

export default MyComponent;
