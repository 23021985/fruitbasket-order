import React, { useState } from "react";

function Fruit(props) {
        return (
            <h2>
                {props.fruitImg}
                {props.fruitName + ' '}
                <button onClick={props.deleteFruit}>-</button>
                {props.count}
                <button onClick={props.addFruit}>+</button>
            </h2>
        )
}
export default Fruit